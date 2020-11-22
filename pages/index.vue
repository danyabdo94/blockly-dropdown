<template>
    <v-container fluid fill-height class="pa-0">
        <v-row style="height: 100%;" justify="center" no-gutters>
            <v-col cols="3">
                <v-btn @click="getXML">
                    <v-icon>mdi-xml</v-icon>
                    Get XML
                </v-btn>
                <br>
                <pre style="overflow-x: auto;">{{ xml }}</pre>
            </v-col>
            <v-col cols="7">
                <BlocklyWorkspace
                    ref="blocklyWorkspace"
                    :options="workspaceOptions"
                    @update:selected="selectedBlock = $event"
                >
                    <block type="button" />
                    <block type="button_bar" />
                    <block type="dropdown_button" />
                </BlocklyWorkspace>
            </v-col>
            <v-col cols="2" class="grey lighten-3">
                <PropertyPane :block="selectedBlock" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import BlocklyWorkspace from '@/components/BlocklyWorkspace.vue';
import PropertyPane from '@/components/PropertyPane.vue';
import { Block } from '@/plugins/blockly/types';

export default Vue.extend({
    name: 'Workbook',
    components: {
        BlocklyWorkspace,
        PropertyPane,
    },
    data () {
        return {
            workspaceOptions: {
                theme: 'default',
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: '#CCC',
                    snap: true,
                },
                zoom: {
                    controls: true,
                    wheel: true,
                },
                move: {
                    wheel: true,
                },
                renderer: 'thrasos',
            },
            selectedBlock: null as Block|null, // The currently selected block in the workspace
            xml: '',
        };
    },
    methods: {
        getXML () {
            const xsltDoc = new DOMParser().parseFromString(`
                <xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
                <xsl:strip-space elements="*"/>
                <xsl:template match="para[content-style][not(text())]">
                    <xsl:value-of select="normalize-space(.)"/>
                </xsl:template>
                <xsl:template match="node()|@*">
                    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>
                </xsl:template>
                <xsl:output indent="yes"/>
                </xsl:stylesheet>
            `, 'application/xml');
            const xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsltDoc);

            const xml: Element = (this.$refs.blocklyWorkspace as any).toXml();
            const transformedXml = xsltProcessor.transformToDocument(xml);
            this.xml = new XMLSerializer().serializeToString(transformedXml).replace(/&quot;/g, '"');
        },
    },
});
</script>
