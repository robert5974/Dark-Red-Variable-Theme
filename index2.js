(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("red-variables");

    plugin.initializeWorkspace = function () {
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "##700202";
        variableStyle.colourSecondary = "##f77002";
        variableStyle.colourTertiary = "##4a0000";

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
