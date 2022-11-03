(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("red-variables");

    plugin.initializeWorkspace = function () {
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "6e0000"; // Body 6e0000
        variableStyle.colourSecondary = "#870000"; //
        variableStyle.colourTertiary = "#420000"; // Daker Colour Transfered

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
