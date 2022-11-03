(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("red-variables");

    plugin.initializeWorkspace = function () {
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "#b53e3e";
        variableStyle.colourSecondary = "#690000";
        variableStyle.colourTertiary = "#6e0000";

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
