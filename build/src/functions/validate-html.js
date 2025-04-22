"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHTML = validateHTML;
var fast_xml_parser_1 = require("fast-xml-parser");
var parser = new fast_xml_parser_1.XMLParser({ htmlEntities: true });
function validateHTML(data) {
    try {
        var data = parser.parse(data);
        if (data.html) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        return false;
    }
}
