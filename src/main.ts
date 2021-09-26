let saveData = {
    dataA: 'aaa',
    dataB: 1,
    dataC: true
}
Game.registerMod("sample mod", {
    init: function () {
        Game.Notify(`初期化`, '');
    },
    save: function () {
        saveData.dataB++
        Game.Notify(`セーブ`, '');
        return JSON.stringify(saveData);
    },
    load: function (str) {
        saveData = JSON.parse(str);
        Game.Notify(`ロード`, '');
    },
});

