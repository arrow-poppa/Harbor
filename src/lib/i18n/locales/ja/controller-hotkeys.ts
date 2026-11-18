// Controller buttons bound to hotkeys in Settings → Hotkeys.
const controllerHotkeys: Record<string, string> = {
  "Controller buttons go next to each key: press one, or hold LB, RB, LT or RT and press another for a combination. A shoulder or trigger used in a combination does its own job when you let go of it.":
    "コントローラーのボタンは各キーの横に並びます。1 つ押すか、LB・RB・LT・RT を押しながら別のボタンを押すと組み合わせになります。組み合わせに使う肩ボタンやトリガーは、離したときに本来の操作をします。",
  "To bind controller buttons, connect a controller and turn on controller support under Controllers.":
    "コントローラーのボタンを割り当てるには、コントローラーを接続し、コントローラーで対応をオンにしてください。",
  "{key} is used for {action}.": "{key} はすでに {action} に使われています。",
  "Remove {key} from {name}": "{name} から {key} を外す",
  "Use it here": "ここで使う",
  "Press a button…": "ボタンを押してください…",
  "Add a controller button for {name}": "{name} にコントローラーのボタンを追加",
  Controller: "コントローラー",
};

export default controllerHotkeys;
