(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("red-variables");

    plugin.initializeWorkspace = function () {
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "#640000"; // Body of Subroutine R - 100
        variableStyle.colourSecondary = "#870000"; //
        variableStyle.colourTertiary = "#460000"; // Edge of Subroutine R - 70

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
