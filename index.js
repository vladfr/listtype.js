'use strict';

/*
 * All supported types. A tuple with [priority, returned_value]
 *
 * With priority, smaller number is higher specificity
 * e.g.: floats include ints, which include natural numbers
 */
const
    TYPE_FLAG    = [0, 'flag'],
    TYPE_ENUM    = [0, 'enum'],
    TYPE_STRING  = [4, 'string'],
    TYPE_FLOAT   = [3, 'float'],
    TYPE_INT     = [2, 'integer'],
    TYPE_NATURAL = [1, 'natural'];

/**
 * Infers type from a list of strings. Detects natural numbers, ints, floats,
 * enum - a limited list of values
 * flag - only one value (excluding null and '')
 *
 * If none match, it will return string.
 *
 * @param {[]} values - a list of strings to infer
 * @return {string} - see above consts for all possible return values
 */
module.exports = function(values) {
    values = values.filter(function (value, index, self) {
        return value !== '' && value !== null
    });

    var types_list = values.map(function(item) {
        var type = null;

        if (item === '' || item === null) type = null;
        if (isNaN(Number(item))) {
            type = TYPE_STRING;
        }
        else {
            var float = parseFloat(item);
            var int = parseInt(item);

            if (float !== int) type = TYPE_FLOAT;
            else if (int >= 0) type = TYPE_NATURAL;
            else type = TYPE_INT;
        }

        return type;
    });

    var inferred = types_list.reduce(function(max, item) {
        return (!max || max[0] < item[0]) ? item : max;
    });

    if (inferred === TYPE_STRING) {
        return inferStringType(values);
    }
    else {
        return sendReturn(inferred);
    }
};

function inferStringType(values) {
    var set = values.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
    var setLength = set.length;
    if (setLength === 1) {
        return sendReturn(TYPE_FLAG);
    }
    else if (setLength < values.length) {
        return sendReturn(TYPE_ENUM);
    }
    else return sendReturn(TYPE_STRING);
}

function sendReturn(code) {
    return code[1];
}
