"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJSON = validateJSON;
function validateJSON(data) {
    try {
        var data = JSON.parse(data);
        return true;
    }
    catch (error) {
        return false;
    }
}
