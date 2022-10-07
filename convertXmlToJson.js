//"cerner_2tothe5th_2022"

convertXMLtoJSON = (xmlObject) => {
    var jsonObject = {};
    if (xmlObject.nodeType == 1) {
        if (xmlObject.attributes.length > 0) {
            jsonObject['@attributes'] = {};
            for (var i = 0; i < xmlObject.attributes.length; i++) {
                var attribute = xmlObject.attributes.item(i);
                jsonObject['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xmlObject.nodeType == 3) {
        jsonObject = xmlObject.nodeValue;
    }
    // Iterate through all child nodes and Use recursive to assign nested nodes
    if (xmlObject.hasChildNodes()) {
        for (var i = 0; i < xmlObject.childNodes.length; i++) {
            var item = xmlObject.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (jsonObject[nodeName]) === 'undefined') {
                jsonObject[nodeName] = convertXMLtoJSON(item);
            } else {
                if (typeof (jsonObject[nodeName].push) === 'undefined') {
                    var old = jsonObject[nodeName];
                    jsonObject[nodeName] = [];
                    jsonObject[nodeName].push(old);
                }
                jsonObject[nodeName].push(convertXMLtoJSON(item));
            }
        }
    }
    return jsonObject;
}

/* Usage Example
var xmlText = '<employeeDetails><employee>' +
    '<name>David Schitt</name>' +
    '<id>DS04141</id>' +
    '<designation>Event Manager</designation>' +
    '</employee></employeeDetails>';

var jsonObj = convertXMLtoJSON(xmlObj);
console.log(jsonObj);
*/
