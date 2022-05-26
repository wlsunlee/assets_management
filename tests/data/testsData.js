exports.testsData = {
    users : [
        {
            email: "testUser001@gmail.com",
            password : "$2b$10$GdiJ2zcjD0Mv5DV.2z7jbO3okS5FdbTlOJQvY9qmiCMvFEoOBjtCa"
        }
    ],
    coins : [
        {
            coin_name : "USDT 테더",
            price : 1275.24
        },
        {
            coin_name : "BTC 비트코인",
            price : 41224000
        },
        {
            coin_name : "ETH 이더리움",
            price : 3106000
        },
        {
            coin_name : "XRP 리플",
            price : 670
        },
        {
            coin_name : "AAVE 에이브",
            price : 131100
        }
    ],
    blockchain_types : [
        {
            type_name : "ERC-20"
        },
        {
            type_name : "TRC-20"
        },
        {
            type_name : "BEP20(BSC)"
        },
        {
            type_name : "비트코인"
        },
        {
            type_name : "리플"
        }
    ],
    coins_blockchain_types : [
        {
            coin_id : 1,
            blockchain_type_id : 1
        },
        {
            coin_id : 1,
            blockchain_type_id : 2
        },
        {
            coin_id : 1,
            blockchain_type_id : 3
        },
        {
            coin_id : 2,
            blockchain_type_id : 4
        },
        {
            coin_id : 3,
            blockchain_type_id : 1
        },
        {
            coin_id : 4,
            blockchain_type_id : 5
        },
        {
            coin_id : 5,
            blockchain_type_id : 1
        }
    ],
    assets : [
        {
            user_id : 1,
            coin_id : 1,
            deposit_address : "9F6886A6B8AC8FC35B1EEB9EE7583A9753ABB2C9E4179BC7599B30462E29134C",
            quantity : 245.9923321,
            blockchain_type_id : 1
        },
        {
            user_id : 1,
            coin_id : 2,
            deposit_address : "9C1A02E997E9A722E96E2EF60586ABF5454587BB2E56FEC79CD551440E635846",
            quantity : 12.001264332,
            blockchain_type_id : 4
        },
        {
            user_id : 1,
            coin_id : 3,
            deposit_address : "7248DB1A8F0F06D0C94EC70BE1530499804BBF1F2A2416C71905D82A4143E1DB",
            quantity : 91.1125,
            blockchain_type_id : 1
        },
        {
            user_id : 1,
            coin_id : 4,
            deposit_address : "2EF82247BDF2D6DE67B9C5F855B7816110CE9658ACE9B6D1637E7940A1C9F909",
            quantity : 500000,
            blockchain_type_id : 5
        }
    ]
}
