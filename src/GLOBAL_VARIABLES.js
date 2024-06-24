var webpages = {
}

var images = {
    CHARACTERS: [
        {
            NAME: "Main Character",
            code: "mc",
            POSES: [
                {
                    POSE_NUMBER: 1,
                    BODIES: [
                        {
                            src: require("./res/characters/mc/sprite_mc1_b_uniform.png"),
                            alt: "Uniform",
                            code: "uniform"
                        },
                        {
                            src: require("./res/characters/mc/sprite_mc1_b_pajamas.png"),
                            alt: "Pajamas",
                            code: "pajamas"
                        },
                        {
                            src: require("./res/characters/mc/sprite_mc1_b_casual.png"),
                            alt: "Casual",
                            code: "casual"
                        },
                    ],
                    FACES: [
                        {
                            src: require("./res/characters/mc/sprite_mc1_f_compassion.png"),
                            alt: "Compassion",
                            code: "compassion"
                        },
                        {
                            src: require("./res/characters/mc/sprite_mc1_f_confused.png"),
                            alt: "Confused",
                            code: "confused"
                        },
                        {
                            src: require("./res/characters/mc/sprite_mc1_f_normal.png"),
                            alt: "Normal",
                            code: "normal"
                        },
                        {
                            src: require("./res/characters/mc/sprite_mc1_f_sleepy.png"),
                            alt: "Sleepy",
                            code: "sleepy"
                        }
                    ]
                },
                {
                    POSE_NUMBER: 2,
                    BODIES: [
                        {
                            src: require("./res/characters/mc/sprite_mc2_b_uniform.png"),
                            alt: "Uniform",
                            code: "uniform"
                        },
                        {
                            src: require("./res/characters/mc/sprite_mc2_b_casual.png"),
                            alt: "Casual",
                            code: "casual"
                        }
                    ],
                    FACES: [
                        {
                            src: require("./res/characters/mc/sprite_mc2_f_thinking.png"),
                            alt: "Thinking v1",
                            code: "thinking"
                        },
                        {
                            src: require("./res/characters/mc/sprite_mc2_f_thinking2.png"),
                            alt: "Thinking v2",
                            code: "thinking2"
                        }
                    ]
                }
            ]
        }
    ]
}

export { webpages, images };