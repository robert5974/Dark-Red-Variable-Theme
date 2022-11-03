(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("red-variables");

    plugin.initializeWorkspace = function () {
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "#420000"; // Made Darker
        variableStyle.colourSecondary = "#870000"; //
        variableStyle.colourTertiary = "6e0000"; //

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
