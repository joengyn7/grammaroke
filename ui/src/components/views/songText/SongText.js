import React from 'react';
import Toolbar from "../../toolbar/Toolbar"
import "./songText.scss"

// Placeholder stuff for eventual backend 

const stanzas = [
    [
        "幸福も別れも愛情も友情も",
        "滑稽な夢の戯れで全部カネで買える代物。"
    ],
    ["明日死んでしまうかもしれない。"],
    ["すべて無駄になるかもしれない。"],
    ["朝も夜も春も秋も"],
    ["変わらず誰かがどこかで死ぬ。"],
    ["夢も明日も何もいらない。"],
    ["君が生きていたならそれでいい。"],
    ["そうだ。"],
    ["本当はそういうことが歌いたい。"]
];

function SongText() {
    const [active, setActive] = React.useState(0)

    const activeRef = React.useRef()

    React.useEffect(() => {
        activeRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }, [active])

    return (
        <div className="song-text">
            <Toolbar />
            <div className="scroller">
                {stanzas.map((stanza, i) =>
                    i === active
                        ? <div
                            className='stanza active'
                            ref={activeRef}
                            onClick={() => setActive(i)}>
                            <div className="stanza-lines">
                                {stanza.map(line => <span>{line}</span>)}
                            </div>
                        </div>
                        : <div
                            className='stanza'
                            onClick={() => setActive(i)}>
                            <div className="stanza-lines">
                                {stanza.map(line => <span>{line}</span>)}
                            </div>
                        </div>
                )}
            </div>
        </div>
    )
};

export default SongText;

