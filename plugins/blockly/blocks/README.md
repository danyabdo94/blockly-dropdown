# BLOCKS

This directory should hold our custom Blockly blocks. They should be defined using the JSON syntax extended using JavaScript if required. Create a separate folder per category, with each directory containing block definitions coming in pairs: `json` and `ts`. The `ts` file imports the `json` definition of the block, complements it with any necessary logic, and registers it in Blockly.

## Block definition

Block JSON format:

```jsonc
{
    "type": "string_length",        // internal name of the block
    "message0": "length of %1",     // text displayed on block. for interpolation, use %(arg #). All args must be interpolated in the msg
    // each (messageN, argsN, lastDummyAlign) tuple denotes a "line/row"
    "args0": [
        {
            "type": "input_value",  // possible values: https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks#inputs_and_fields_in_json
            "name": "VALUE",        // internal name used to reference this field
            "check": "String",      // type-checks the parameter using the given arbitrary string. supports an array
            "alt": {                // if the type is not recognized. ex: new type in Blockly, backward compatibility
                "type": "",
                "name": "",
                "text": "",
                "alt": {}           // can have nested alts
            },
            // if "type": "field_variable":
            "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",    // variable name is given at runtime
            "variableTypes": [],    // allows typechecking
        }
    ],
    "lastDummyAlign0": "LEFT",      // |"RIGHT"|"CENTRE". aligns that trailing dummy input
    "nextStatement": null,          // Allows connecting a statement under it, optionally specifying its type
    "previousStatement": null,      // Allows connecting this block to a statement (block) above it
    "output": "Number",             // Return type of the block
    "colour": 160,
    "tooltip": "",                  // displayed on hover. to be dynamic, use function in JS
    "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp",        // right click -> help
    "inputsInline": true,           // controls whether a message's inputs are on the same or separate lines
    "mutator": "properties"    // https://developers.google.com/blockly/guides/create-custom-blocks/extensions#mutators
}
```


Example:
```javascript
Blockly.Blocks['myBlock'] = {
    init: function() {
        this.jsonInit(myBlockJson);
        this.setTooltip(() => 'Add a number to variable "%1".'.replace('%1', this.getFieldValue('VAR')));
    }
};
```

Check out the [Blockly documentation](https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks) for more details.

## Block properties

The [_properties_ mutator](../mutators/properties.ts) allows to define additional properties on a block and have them saved on it and reads them when loading. These properties are used (modified) through the property panel. Each block should define a `properties` key on the block object with an object of the block's properties (no particular interface).
