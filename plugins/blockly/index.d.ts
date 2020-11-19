/* eslint-disable import/no-duplicates */
declare module 'blockly/javascript' {
    import { Generator } from 'blockly';
    let instance: Generator;
    export = instance;
}

declare module 'blockly/dart' {
    import { Generator } from 'blockly';
    let instance: Generator;
    export = instance;
}
