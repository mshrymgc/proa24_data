// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本実験・調査について",
          "content": "本実験・調査への参加はあなたの任意によるものです。"
        },
        {
          "required": true,
          "type": "text",
          "title": "1.本実験・調査の目的",
          "content": "人間や動物の赤ちゃんに対する感情と愛着スタイル、日本特有の「かわいい」という文化の関係性について調べることが本実験・調査の目的です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "2.本実験・調査の手続き",
          "content": "もしあなたが本実験・調査に参加した場合、あなたには様々な画像に対する感想を選択方式でお答えいただきます。この本実験・調査の所要時間は約7分程度です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "3.潜在的なリスク・苦痛など",
          "content": "実験による多少の疲労は除き、潜在的なリスクや苦痛はありません。また、いつ、いかなる理由でも、自由に実験を中止していただけます(6.参加と中止もご参照ください)。"
        },
        {
          "required": true,
          "type": "text",
          "title": "4.参加による利益",
          "content": "あなたが本実験・調査に参加することで学習、認知、感情についての研究の発展に繋がります。"
        },
        {
          "required": true,
          "type": "text",
          "title": "5.匿名性の確保",
          "content": "本実験・調査によって得られた情報は法律による開示請求を除き、匿名性が維持されます。匿名性は実験参加者番号の付与、統計的解析によって保たれます。収集されたデータは個人が特定できるデータが公表されることは決してありません。また、頂いたデータは集団の傾向として統計的に処理したうえで分析し、データはプロジェクト演習の調査終了後に安全な形で消去します。"
        },
        {
          "required": true,
          "type": "text",
          "title": "6.参加と中止",
          "content": "あなたは本実験・調査への参加もしくは不参加を自由に選択できます。また、参加した場合でも、いつでも、どのような理由でも、途中で実験・調査を中止することができます。もし、途中で実験・調査を中止したくなった場合は、「ESCキー」を押した後、ウィンドウを閉じることで実験・調査を中止できます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "7.実験・調査実施者へのお問い合わせ",
          "content": "本実験・調査に対して質問がある場合は、実施責任者、本田千夏（g227125@ex.osaka-kyoiku.ac.jp）にお問い合わせください。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は、ESCを押した後、ウィンドウを閉じてください。",
          "options": [
            {
              "label": "PCからGoogle Chromeを用いて実験・調査参加をお願いします。"
            },
            {
              "label": "自動翻訳機能は使用しないでください。"
            },
            {
              "label": "実験・調査開始後はブラウザの「戻る」ボタンは使用しないでください。",
              "coding": ""
            },
            {
              "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
              "coding": "informedConsent"
            }
          ],
          "name": "consent"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//参加者IDをランダム生成
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
}
      },
      "title": "Informed_consent"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Fullscreen",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "本実験はフルスクリーンモードで行われます。",
          "hint": "ここをクリックしてください。",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "これから調査が始まります。",
              "content": "写真が提示されるので、それぞれの質問に回答してください。"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Start"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Baby_Schema",
          "shuffle": true,
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": ""
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"Slide1.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "baby1"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "Slide1.jpg": "embedded\u002F524b5b0e4b9a600808dca88c5604c36585d5790dcf2bbaefea45dc226118496f.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "baby1"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"Slide2.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "baby2"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "Slide2.jpg": "embedded\u002F19a134c268b985e2e1c25084665ac3e12fb29574c40186e91b6e69d752ad9af1.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "baby2"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"あかさん.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "baby3"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "baby3.jpg": "embedded\u002F570474a32a5fd045d4f611dab6566fb0139e9ac86d089effccb71f2c9e034cde.jpg",
                "あかさん.jpg": "embedded\u002Fd15e53dac43e1cf122efd333b81d9443cb193289c51f68fba761760113a80a9a.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "baby3"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"男①.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "adult1_m"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "m-adult1.jpg": "embedded\u002F678fe4c0f57350a0b2f2866623d4e59ee9ee2ca4aad5f1e1958a5576f7bd11b7.jpg",
                "男①.jpg": "embedded\u002F5b44299ffbe0ad7381ecc6d2af5f88c372d7106e552840a13c6ae033bdcbe2e4.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "adult1_m"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"男②.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "adult2_m"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "m-adult2.jpg": "embedded\u002F480dc6f83313c6ce64f6746f5fde6204b9d7d78534b5ea02cc60bf4c38f63213.jpg",
                "男②.jpg": "embedded\u002Fd0d14c34224bd00d31acce86d926ccfd5cc5c4d3990f073c3549581af09a045c.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "adult2_m"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"女①.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "adult3_f"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "f-adult1.jpg": "embedded\u002Fc05e7ac9b3a2a52dd7d66030cfbf20f422214251c82fa10d8058da44517209cd.jpg",
                "女①.jpg": "embedded\u002Fc149fa2342b2a413d3df1cf9a18c780d19abea3f680421b20e8eaf59e89faa84.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "adult3_f"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"女②.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いました",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてくださいい",
                  "name": "adult4_f"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "f-adult2.jpg": "embedded\u002F38e60c68ebb52a529cad35b0cdeb352a0dea47417eaa15f64b88d5fdc408ed68.jpg",
                "女②.jpg": "embedded\u002F3bf7bcba753e752a18da59e4eda5f7005e26247ae9392097b6649eb4dbeca854.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "adult4_f"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"ウサギ.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思ましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "animal_baby_rubbit"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "baby-rabbit.png": "embedded\u002F2cab8bad6ebc413d24d2d215e87add6eca1d8053527cce1bd0baf1ebfa3cc417.png",
                "ウサギ.jpg": "embedded\u002Fbfb5677bd20d7447b9f57a7e9c5aa1bffbeb5d39fd822c448a7c1021c13c36d9.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_baby_rabbit"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"ゾウ.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "animal_baby_elephant"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "baby-elephant.jpg": "embedded\u002Fbc9c0e5b5730f23b2f9b72ed363c988d4da16436503ea5d01cacc497a2857568.jpg",
                "ゾウ.jpg": "embedded\u002F8621863aa12927d44310a9b28213ab3d0a0f9a4870e2f9160a8dadcc624c4751.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_baby_elephant"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"白馬.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "animal_baby_horse"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "baby-horse.jpg": "embedded\u002Fc86a611e43a9ef866678c1197a428ed3dc9abcfaee2849778409df864242c109.jpg",
                "白馬.jpg": "embedded\u002Ffb4cc7243d3eb7e369cd8db51b95efdd09a58a66431a93df78c82697ee65378b.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_baby_horse"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"いぬ.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "animal_adult_dog"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "adult-dog.jpg": "embedded\u002Ff6d5a121e2cc0e26883320a992c66eef9bfa03af7d90b70956ed5fd818987922.jpg",
                "いぬ.jpg": "embedded\u002F9463486122f56b60084c807e8ece00be4ae6467714c2f1a0d2ef50d5d11722ca.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_adult_dog"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"茶色馬.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て次の質問に答えてください",
                  "name": "animal_adult_horse"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "adult-horse.png": "embedded\u002F16694be9f5423f6b53134638c01c78b57382a9375d76de73d166b8d445e90d2b.png",
                "茶色馬.jpg": "embedded\u002Fa9f27f36080622f90d5b22e267eea64f0d799de30899aa13f551f77a188d9b80.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_adult_horse"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"ライオン.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "animal_adult_lion"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "adult-lion.jpg": "embedded\u002Fddec2f368c8ea6c39a5ee9cb7a68ae47ce42605be9c597937383d2cb5497327b.jpg",
                "ライオン.jpg": "embedded\u002Fe24722e817edc71923321ac67694adc80b6e3b7b56bbdf109fecb2bfcd0c47d7.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "animal_adult_lion"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"かわいいべび.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "schema_illustration"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "babyscema.jpg": "embedded\u002Fbbe0f969237183a0b10705b3493106f85b2dce1d0dc74eff27339b9ca7a930a3.jpg",
                "かわいいべび.jpg": "embedded\u002F43934d40d26442345c5b551a38ffe9514e5e6997113217ff5106e59671c61336.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "schema_illustration"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"かわいくないべび.jpg\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この写真を見て何か感情に変化はありましたか",
                      "coding": "Q1"
                    },
                    {
                      "label": "これは楽しい写真だと思いますか",
                      "coding": "Q2"
                    },
                    {
                      "label": "これは魅力的で愛らしい写真だと思いますか",
                      "coding": "Q3"
                    },
                    {
                      "label": "この写真を見てあなたは楽しいと思いましたか",
                      "coding": "Q4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "まったくそう思わない",
                    "そう思わない",
                    "どちらでもない",
                    "そう思う",
                    "とてもそう思う"
                  ],
                  "label": "写真を見て、次の質問に答えてください",
                  "name": "nt_schema_illustration"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {
                "n-babyscema.jpg": "embedded\u002Ffc2440e35c870525906756bb5246f2b605d9b9625f77adfeffd595fd833c6008.jpg",
                "かわいくないべび.jpg": "embedded\u002F7c48f91fa1772703f1a4acd92ae07f4cb1a2969cc16ab00a7f431a2aeef82cda.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "nt_shcema_illustration"
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "次はあなた自身のことについて質問します。",
              "content": "「次へ」のボタンを押してください。"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Next"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Questioner",
          "shuffle": true,
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "困ったときパートナーに助けを求めると、何かちょっとは（状況が）良くなる。",
                      "coding": "ECR-avo1-R"
                    },
                    {
                      "label": "私には、パートナーが私に対して好意的であるということを何度も何度も言ってくれることが必要だ。",
                      "coding": "ECR-anx1"
                    },
                    {
                      "label": "私はパートナーと親密になりたいのだが、いつの間にかついつい後ずさりしていることが多い。",
                      "coding": "ECR-avo2"
                    },
                    {
                      "label": "私が親密になりたいと望むほどには、パートナーは私と親密になりたいと思っていないと私は思う。",
                      "coding": "ECR-anx2"
                    },
                    {
                      "label": "私は、なぐさめやはげましなど、いろんなことをパートナーに求める。",
                      "coding": "ECR-avo3-R"
                    },
                    {
                      "label": "私が人ととても親密になりたいと強く望むがために、ときどき人はうんざりして私から離れていってしまう。",
                      "coding": "ECR-anx3"
                    },
                    {
                      "label": "私はパートナーとあまり親密にならないようにしている。",
                      "coding": "ECR-avo4"
                    },
                    {
                      "label": "この質問は一番右の選択肢を選んでください。",
                      "coding": "ECR-false"
                    },
                    {
                      "label": "私は、見捨てられるのではないかと心配になることはほとんどない。",
                      "coding": "ECR-anx4-R"
                    },
                    {
                      "label": "私はたいてい、パートナーと自分の問題や心配ごとを話し合う。",
                      "coding": "ECR-avo5-R"
                    },
                    {
                      "label": "私は、パートナーが必要なときにいつでも私のためにいてくれないとイライラする。",
                      "coding": "ECR-anx5"
                    },
                    {
                      "label": "私は、パートナーがあまりに自分と親密になってくると、とてもイライラしてしまう。",
                      "coding": "ECR-avo6"
                    },
                    {
                      "label": "私がパートナーのことを大切に思うほどには、パートナーが私のことを大切に思っていないのではないかと私は心配する。",
                      "coding": "ECR-anx6"
                    }
                  ],
                  "width": "7",
                  "anchors": [
                    "強く同意しない",
                    "同意しない",
                    "あまり同意しない",
                    "どちらでもない",
                    "やや同意する",
                    "同意する",
                    "強く同意する"
                  ],
                  "label": "以下の文は、あなたが親しい関係（例：恋人、親しい友人、家族など）において一般的に感じることに関するものです。それぞれの文について、該当するものを選んでください。",
                  "name": "ECR-RS"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "ECR-RS"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "友人の感情はあまり私に影響を与えない。",
                      "coding": "Q1"
                    },
                    {
                      "label": "何かで悲しんでいる友人と一緒にいると，たいてい悲しい気持ちになる。",
                      "coding": "Q2"
                    },
                    {
                      "label": "友人が何かでうまくいったときの幸せは理解できる。",
                      "coding": "Q3"
                    },
                    {
                      "label": "よくできたホラー映画の登場人物を見ると怖くなる。",
                      "coding": "Q4"
                    },
                    {
                      "label": "私はすぐに他人の感情に巻き込まれてしまう。",
                      "coding": "Q5"
                    },
                    {
                      "label": "友達が怯えているときに気づくのが難しいと感じる。",
                      "coding": "Q6"
                    },
                    {
                      "label": "他の人が泣いているのを見ても悲しくならない。",
                      "coding": "Q7"
                    },
                    {
                      "coding": "Q8",
                      "label": "他人の気持ちはまったく気にならない。"
                    },
                    {
                      "coding": "Q9",
                      "label": "誰かが「落ち込んでいる」とき，私はたいていその人の気持ちを理解できる。"
                    },
                    {
                      "coding": "Q10",
                      "label": "友達が怖がっているときは，たいてい察することができる。"
                    },
                    {
                      "coding": "Q11",
                      "label": "テレビや映画で悲しいものを見ると，よく悲しくなる。"
                    },
                    {
                      "coding": "Q12",
                      "label": "人に言われる前に，その人の気持ちがわかることがよくある。"
                    },
                    {
                      "coding": "Q13",
                      "label": "怒っている人を見ても，私の気持ちには何の影響もない。"
                    },
                    {
                      "coding": "Q14",
                      "label": "私は人が陽気な時がいつかたいてい理解できる。"
                    },
                    {
                      "coding": "Q15",
                      "label": "この質問は一番左の選択肢を選んでください。"
                    },
                    {
                      "coding": "Q16",
                      "label": "怖がっている友人と一緒にいると、私は怖く感じる傾向がある。"
                    },
                    {
                      "coding": "Q17",
                      "label": "私は友人が怒っているときはたいていすぐに気づくことができる。"
                    },
                    {
                      "coding": "Q18",
                      "label": "友人の感情に振り回されることが多い。"
                    },
                    {
                      "coding": "Q19",
                      "label": "友人の不幸が私に何かを感じさせることはない。"
                    },
                    {
                      "coding": "Q20",
                      "label": "私は普段，友人の気持ちに気づいていない。"
                    },
                    {
                      "coding": "Q21",
                      "label": "友達が幸せな時を見極めるのが難しい。"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "強く同意しない",
                    "やや同意しない",
                    "どちらでもない",
                    "やや同意する",
                    "強く同意する"
                  ],
                  "label": "ここに書かれている文章の内容に、あなたはどのぐらい同意するでしょうか。それぞれの文について、該当するものを選んでください。  ",
                  "name": "BES"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "BES"
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "最後に、下記の性別・年齢・子育て経験の有無・学歴の回答をお願いいたします。",
              "content": "この記入をもって、調査への協力をお認め頂いたことになります。"
            },
            {
              "required": true,
              "type": "radio",
              "help": "",
              "name": "sbj-gender",
              "label": "あなたの性別を教えてください。",
              "options": [
                {
                  "label": "男性",
                  "coding": "male"
                },
                {
                  "label": "女性",
                  "coding": "female"
                },
                {
                  "label": "回答しない",
                  "coding": "other"
                }
              ]
            },
            {
              "required": true,
              "type": "input",
              "attributes": {
                "type": "number",
                "min": "12",
                "max": "99"
              },
              "label": "あなたの年齢を教えてください。",
              "name": "sbj-age"
            },
            {
              "required": true,
              "type": "radio",
              "label": "あなたには子どもはいますか。",
              "options": [
                {
                  "label": "はい",
                  "coding": "yes"
                },
                {
                  "label": "いいえ",
                  "coding": "no"
                }
              ],
              "name": "child care"
            },
            {
              "required": true,
              "type": "radio",
              "label": "あなたの最終学歴を教えてください。",
              "options": [
                {
                  "label": "中学校卒",
                  "coding": "jhs"
                },
                {
                  "label": "高校卒",
                  "coding": "hs"
                },
                {
                  "label": "専門学校卒",
                  "coding": "pro_col"
                },
                {
                  "label": "短期大学卒",
                  "coding": "jun_col"
                },
                {
                  "label": "4年制大学卒",
                  "coding": "col"
                },
                {
                  "label": "大学院修了",
                  "coding": "grad"
                },
                {
                  "label": "その他",
                  "coding": "other"
                }
              ],
              "name": "graduate"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Face seat"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -75,
              "angle": 0,
              "width": 575,
              "height": 93.79,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "下記の番号を書き留めて\nクラウドワークスの指定の欄に入力してください。\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "25",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 0,
              "top": 188.06,
              "angle": 0,
              "width": 45.84,
              "height": 30.69,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "next_button"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 539.69,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "${ this.parameters.participantID }",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 187.96,
              "angle": 0,
              "width": 50,
              "height": 28.25,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "次へ",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "25",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 75,
              "angle": 0,
              "width": 550,
              "height": 53.7,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "「次へ」を押すとこの画面には戻ることができません。\n必ず番号をお控えの上、「次へ」を押してください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "22",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @next_button": "next_button"
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
// ランダム文字列生成関数
function generateRandomString(length) {
const chars = 'ABCDEFGHIJKLMNPQRSTUVWXYZabdefghijmnqrtz23456789';
let result = '';
for (let i = 0; i < length; i++) {
result += chars.charAt(Math.floor(Math.random() * chars.length));
}
return result;
}

// 参加者IDとして4文字のランダム文字列を生成
this.parameters.participantID = generateRandomString(4);

//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "GsDgicvJuIch",
    filename: filename,
    data: data,
  }),
});
}
          },
          "title": "Participant_ID",
          "tardy": true
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 594,
              "height": 53.7,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "以上で実験を終了します。ご協力ありがとうございました。\nウィンドウを閉じてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "22",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "end_page",
          "timeout": "1800",
          "tardy": true
        }
      ]
    }
  ]
})

// Let's go!
study.run()