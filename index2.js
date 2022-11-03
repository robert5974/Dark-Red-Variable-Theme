(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("red-variables");

    plugin.initializeWorkspace = function () {
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "#500000"; // Body of Subroutine R - 80
        variableStyle.colourSecondary = "#870000"; //
        variableStyle.colourTertiary = "#460000"; // Edge of Subroutine r - 70

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
