import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaDvdripBdService {

  private peliculas: Series[] = [
    {
      idx: 0,
      titulo: 'The big bang theory temporada 1',
      short: 'The big bang theory temporada 1',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt1.jpg',
      fecha: '2007-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['1KEhUh5BjNJYeCLpauRB-RvIzaArksmnM/preview', // 1
        '1n4diSZroVN1LMoSSEBejbLamh14Aa5E9/preview', // 2
        '1tIDl4cRUdXyEu5eZFzY5vIIziYlvyTD7/preview', // 3
        '1oC6ascgdzijBRYhRMmfq2OJo7gDWkUn9/preview', // 4
        '1Mr0xbBhWVgDwUJ2KY21EmMw_b8--s6sa/preview', // 5
        '1UCH_vpTR7Je8eCfcVAax8rqiPDzsU6a6/preview', // 6
        '1vPIlaWIkyD41qlkGjsYtMLKKWpzRqfY4/preview', // 7
        '1tAu-pgnGcnIN7MpkgMKENz0BCcSdNsXh/preview', // 8
        '1_zGsc6ZebzktAgFu5j1stuPec546ypLh/preview', // 9
        '1mn2rMbFhclRw4b1ImhqDz3zjjDAIDvu3/preview', // 10
        '17CgguEv8ig0mE7SO3ju-HxJEl_U9rKjn/preview', // 11
        '17x2w6BscCfifWg4jA35Wpqawf59Lp4Ff/preview', // 12
        '1eMEErht-jpCrdZ5EACprAljGsYfMmDG5/preview', // 13
        '1g6lbGcX4iER2pLXaX5SJSxNVQ096AI-q/preview', // 14
        '1uNeq3XKKDfpmxW-H92H0QTmz3SMut_7U/preview', // 15
        '13f0mqXB8ZtBCIqPEH1Bn8JgimXIOBVq0/preview', // 16
        '1KOVmxuiluDbHy0hQHWlhF1Og9gAcmJAD/preview', // 17
      ]
    },
    {
      idx: 1,
      titulo: 'The big bang theory temporada 2',
      short: 'The big bang theory temporada 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt2.jpg',
      fecha: '2008-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['1Nervxw8wnWKUdL6y9r4tWeNThnTSYaBK/preview', // 1
        '1OwI0HTAqd449sAM4-7ZvgG_UkziAdrrV/preview', // 2
        '1Qzshyf7E55XKzMBKvRNODoRGrkdGR0CU/preview', // 3
        '1ew_hENVHRIR2H-Opx8iR60w6uii2zycV/preview', // 4
        '1kmoN1uh_Bjc-znTjXRjM79HVhNwUiLJo/preview', // 5
        '1mc6qTWoI9NwYYM6PkA8tpl3a5Q_lGT6j/preview', // 6
        '1NTESvk4f76lTq6W46CpOKD0QM1pNA_s7/preview', // 7
        '1K3TA0FIYQ-l3WwgbpuTN2RKUAXGcT5b5/preview', // 8
        '1I6_VUrtoYDg0J9JoESqpSYU6Q4BqWUZ1/preview', // 9
        '18AghfAwUxlyDSt8514O7E2NAWZ6GxFEl/preview', // 10
        '177C-XpYD829JzfuIlxLc5CBiWdXasXDE/preview', // 11
        '1bCpxVkhbkuLdQbmkEnzGKFE4OINWKhwk/preview', // 12
        '1MbMEi-iqyQNqE3PrpopShyhvqPF_8Pc7/preview', // 13
        '12ZqPq2AxMHjfmnFnxajozef9yC943Fxb/preview', // 14
        '1iy8snmQj8m6AdUGmMhW-1e71dPhegHDX/preview', // 15
        '1WGvJLwEXcA88XeiuVhBJehjXRDsXRNrr/preview', // 16
        '1W0j0xkX1p77cCixddkMb4mByJtAxF_4N/preview', // 17
        '1Bo_DH8oMYG1rWY9k1s0yZsjq_TtS-vxO/preview', // 18
        '1niygv_P5G-jPIgvmuC1RT5rxQB59WSj4/preview', // 19
        '16j_HjZY8AVuDPYEPh6ZIka2o8_Fj8GJj/preview', // 20
        '13Y2Lz2oFBWBT2P8ieNZersA6qAncbxPm/preview', // 21
        '18VgrPKIYoAIBWpz9HxTyx7OOumEKmwEV/preview', // 22
        '11oNAgYkSBb8flv9-IE-W6S1CjygNz5qH/preview', // 23
      ]
    },
    {
      idx: 2,
      titulo: 'The big bang theory temporada 3',
      short: 'The big bang theory temporada 3',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt3.jpg',
      fecha: '2009-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['13w2gegL3WEg_6QokUtMLkhUx8qzLK7Rx/preview', // 1
        '1HwCoE1qaspXEBfDNQ1L7SJ6aGuII5KjW/preview', // 2
        '1tvtgazx1-QIFTbAadJZvPLazuPNk_cjh/preview', // 3
        '18s4n2mURTFbAqet9wg_9vVouOlUOhjJq/preview', // 4
        '1RpayGZmLSJQAjon8hD2BpMkK2HqWJKUZ/preview', // 5
        '1Dsn9JEZaHrj9zvxC0mfiIQwml-GW5m9V/preview', // 6
        '1bz5OgXxByd9W1-7oU4aGXjnzUUedDajc/preview', // 7
        '1fRviYaUkez6hnLPEvFKnfQgT1lSPCKvC/preview', // 8
        '1Blg3u5VTsa91tn7rvU64H4IULvpZSyHY/preview', // 9
        '10q9wP90FG15Fb7MLmJrE6qVb05LMDJ8x/preview', // 10
        '1HXA--8L6TDDeehvczsj1TTLpd6D-s-eR/preview', // 11
        '1t-pvgI-bZvfvnH3geK-SJxpSqMoYpBae/preview', // 12
        '1zCzGe5XL9O_gpPy3r5jBne-6v222ipFT/preview', // 13
        '1bDV0-7F-xkwcqGYAiMnPsqZqAhg44idz/preview', // 14
        '1gKT29I9esFHoD6xgmtIQU0IVIJDku0My/preview', // 15
        '16zGCX1P1pZCPfa_LpB9YzX3aoigqd7at/preview', // 16
        '1-pXGggBLEJTbv1ucbYB2z_RtaloeAkzB/preview', // 17
        '1yh5SZh0bPLghuaQMFodXSj4UwFoWeft9/preview', // 18
        '1OevaYbbJCAWwhV9aJ5507YRttRcluQNY/preview', // 19
        '1QEU6ORwjehHUIY0qAsx6Sqh8AKzDdTSf/preview', // 20
        '19kSCPWUYmngtULRkBECNQyl8hzCeAyM0/preview', // 21
        '1jtsqhMQLVX0lpMG5ZWckoF9e5hWrEQme/preview', // 22
        '1qJy0YkQP95iB8ndRDCBwVjOKFOoDR3Ys/preview', // 23
      ]
    },
    {
      idx: 3,
      titulo: 'The big bang theory temporada 4',
      short: 'The big bang theory temporada 4',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt4.jpg',
      fecha: '2010-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['1TsxtJay7XaN_kfnnw_bPPO1d618qwXGQ/preview', // 1
        '14gE0Lszp1FMBwgfKbHRk4I-wIiZ2wqaI/preview', // 2
        '1r3Z6wlB7on3eTYuHvdQNBXn0LCFz3w_t/preview', // 3
        '1vmH6qtGudYh82hOsKIak9yW2ItPaI_DF/preview', // 4
        '1fDCYVNrhBsnDyUkHtjnkEgotL9IaKFf_/preview', // 5
        '1yvY-L3RGhcFdYECUu5z2t3MPaImlHC2P/preview', // 6
        '10S07JL1on0Jqg-S6li4_lUcsl3ieUdZK/preview', // 7
        '1ue_EbPDwSvqPil4Y3FxNKRaK_a0wmrea/preview', // 8
        '17oXZ6xSRdtdNbZvSapRMFopz6MkdCbwm/preview', // 9
        '14jjXYfpMkymZv-UFknpUpx57zUt4CO-W/preview', // 10
        '1kgP2K2IKIGInr_xoCUd6X53tOY_dxD39/preview', // 11
        '15VqKu7b86LoANRhAgK9asVUIfhMnDlv6/preview', // 12
        '1sX_WfuiXwNp_tgF8Flk6mQA1K1QUKAvM/preview', // 13
        '1dqZ9bC2eLbKDlgzZXVlkn7CyT7pdoNrB/preview', // 14
        '1ExTQCTX604RN4QQPn6ZkQ63n0wgZQRMs/preview', // 15
        '1L9RK57XY1fwmTnCSLyO-1EtlDKvVid3m/preview', // 16
        '1icC50ETXcXwlMGign_AYvVUuGMLmweiL/preview', // 17
        '1AAHoDu4x1cm_-JfC2oK-rwMoTELCezPp/preview', // 18
        '1QiJPUlY9kz4Ac44EitH3DalstSWNQp55/preview', // 19
        '1Rs4sBylvHNBbsYknVRtRbADimu0bx7iS/preview', // 20
        '1QD0KlX_szZinMJwmmMd1UkOpdXgIUlJk/preview', // 21
        '1ie9Rnlh7DmM7PY3lBZsp3nIpkcPew0_u/preview', // 22
        '1bCr4yf7HVmAz4AMtutbm47Eos7bjBElY/preview', // 23
        '1qFVetGUi2SYRoZicIGrAMLlrw0mYUztv/preview', // 24
      ]
    },
    {
      idx: 4,
      titulo: 'The big bang theory temporada 5',
      short: 'The big bang theory temporada 5',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt5.jpg',
      fecha: '2011-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['1cTrcHiCAIl9kdihDEc-2_Yr4XINkhRzD/preview', // 1
        '1L2vfGwB_10RXaIyy61TGtlaBvmpPM3VM/preview', // 2
        '1O9x2nRNaK3V_EJNjVDobErv1mGZF79l1/preview', // 3
        '1nmnUH-u1QgIXUlOgppgqJmRqrNXB48Gl/preview', // 4
        '1viHQXp8usSM9mydpzjZcj3oG499Yrdf0/preview', // 5
        '1Iiwsulgp7WFPqIgqop945Pjmq-t6cekV/preview', // 6
        '1yBbRfHAWFTH5KiOxu-ksxFzogAemMqmo/preview', // 7
        '1GTI4LYO7zlDX0aIJ8-6F78qiAgTnGoOJ/preview', // 8
        '183lx31w8hw-hT0-U-VOq0tV5qEJGmc74/preview', // 9
        '1bwwqf46sZoATAv-z0p5WTAsZahuZh0aC/preview', // 10
        '13Wd0f7aMRKq-8sFCuYGu_gBgVeOzUsX6/preview', // 11
        '1tUSdyRZmM2fSQ20uNlDA_u3smXKLEDVZ/preview', // 12
        '1Gqyuqu3hPpiAVCZj0RuabIJfupXnb7DD/preview', // 13
        '13Zi0vbpKNw6eXGoc36L8SqD9120uuJ1j/preview', // 14
        '1hpoxx5o33dclkVOueAZ9u9L8suEOXlCT/preview', // 15
        '1IoIDy1hNY4XMN22NBAV2yC6kQnQQ5eqE/preview', // 16
        '1mpS4jlea06uMaXh9mM8dycPR5VhJ14XO/preview', // 17
        '1o2cXlmiu5OZK3SxBUcCZn5f1XcNlTToq/preview', // 18
        '1NFNpNNykpxvEasQt54Pr-Wv0U-I_HMhA/preview', // 19
        '1HaA-beuCjIiXyGZ--3HCQpfjNpHG4zQ8/preview', // 20
        '1uT-y-4gZXAgfH6DAUWf5hF0pVPDIOSgR/preview', // 21
        '1jOFIfOxHuG0fP0yti0HRzllwgLyxnd2Y/preview', // 22
        '1qV80ouva7IDOZJxGB9S5eLDXfYhb6WTW/preview', // 23
        '1IzR55G0vvYOXw6ghNpx8Qdqlz_cmXz5L/preview', // 24
      ]
    },
    {
      idx: 5,
      titulo: 'The big bang theory temporada 6',
      short: 'The big bang theory temporada 6',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt6.jpg',
      fecha: '2012-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['178rcNDOdS-X_9VXfu3UnODf5fbPPXvbC/preview', // 1
        '10M7qTF0J_r-d7X5-t04-58XxIUokau_B/preview', // 2
        '1p9l5lSvIj4bav9nPze8lmfKij2X_q9qJ/preview', // 3
        '1GEGCJfPUgr_O1m5cMPjdE1DLpnM-zLEw/preview', // 4
        '1EIb-Ckj7tHQXiovuJujzJjGY94zT45JX/preview', // 5
        '1GzgLemCSmQW3OHQxvQpBkvMW-pjrVkQE/preview', // 6
        '18xsxR8Y-nMckdGcjKFpG2rBOqipRYred/preview', // 7
        '1QhLLeV1RHsoTpg3d8HcCireLY5TMzwOq/preview', // 8
        '1oqkeHMigef1yF_poqDTOUl_ifX1v2jaa/preview', // 9
        '1kfdg6Gze2cte7tDAPmc_w84xHAx2WpNY/preview', // 10
        '1a4UhMxOpSwFwJ8DMTgHQ1fds4bLdEYgl/preview', // 11
        '1pTmV_nTWJm1Dxs9j6mZmsp5wBeXNaagN/preview', // 12
        '1sQJBnL2HGwEu3GihEzKSjRq7P8Jt1N2V/preview', // 13
        '1mb4zUXOzDQDvi6rS8Zi-xJsUoWEdeW8B/preview', // 14
        '1kk3Ch6ffspR438OxWUCdEKxkNzSg5Db7/preview', // 15
        '1bN2RDzPhtfmm5qN-ug8e2O9Bms8T2CGp/preview', // 16
        '1s5xVhbgYHXpRM_n1B3tArRJDd-sKA6oT/preview', // 17
        '1CxAMe3s9USsf5k7V2Rz5QDqiHLb5qarK/preview', // 18
        '1POuQHOwAPQYCP1x_0bUrTtXULrcOOIWj/preview', // 19
        '13erU1ioDucCuhqGbitJRGEnCuYWGK_IH/preview', // 20
        '1bl1OxsT5_DXljD6zvk7RacIRwQgX74Gp/preview', // 21
        '1oOQF88kX1LMtBD_SrApMChavHac3499j/preview', // 22
        '199F_KMWksOtwh586xiO87UibdJo7WLfM/preview', // 23
        '1HV0VGcmv_nNMzEwHu9CyENNUTW0eMzPP/preview', // 24
      ]
    },
    {
      idx: 6,
      titulo: 'The big bang theory temporada 7',
      short: 'The big bang theory temporada 7',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt7.jpg',
      fecha: '2013-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['/preview', // 1
        '/preview', // 2
        '/preview', // 3
        '/preview', // 4
        '/preview', // 5
        '/preview', // 6
        '/preview', // 7
        '/preview', // 8
        '/preview', // 9
        '/preview', // 10
        '/preview', // 11
        '/preview', // 12
        '/preview', // 13
        '/preview', // 14
        '/preview', // 15
        '/preview', // 16
        '/preview', // 17
        '/preview', // 18
        '/preview', // 19
        '/preview', // 20
        '/preview', // 21
        '/preview', // 22
        '/preview', // 23
        '/preview', // 24
      ]
    },
    {
      idx: 7,
      titulo: 'The big bang theory temporada 8',
      short: 'The big bang theory temporada 8',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt8.jpg',
      fecha: '2014-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['1cTrcHiCAIl9kdihDEc-2_Yr4XINkhRzD/preview', // 1
        '/preview', // 2
        '/preview', // 3
        '/preview', // 4
        '/preview', // 5
        '/preview', // 6
        '/preview', // 7
        '/preview', // 8
        '/preview', // 9
        '/preview', // 10
        '/preview', // 11
        '/preview', // 12
        '/preview', // 13
        '/preview', // 14
        '/preview', // 15
        '/preview', // 16
        '/preview', // 17
        '/preview', // 18
        '/preview', // 19
        '/preview', // 20
        '/preview', // 21
        '/preview', // 22
        '/preview', // 23
        '/preview', // 24
      ]
    },
    {
      idx: 8,
      titulo: 'The big bang theory temporada 9',
      short: 'The big bang theory temporada 9',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt9.jpg',
      fecha: '2015-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['/preview', // 1
        '/preview', // 2
        '/preview', // 3
        '/preview', // 4
        '/preview', // 5
        '/preview', // 6
        '/preview', // 7
        '/preview', // 8
        '/preview', // 9
        '/preview', // 10
        '/preview', // 11
        '/preview', // 12
        '/preview', // 13
        '/preview', // 14
        '/preview', // 15
        '/preview', // 16
        '/preview', // 17
        '/preview', // 18
        '/preview', // 19
        '/preview', // 20
        '/preview', // 21
        '/preview', // 22
        '/preview', // 23
        '/preview', // 24
      ]
    },
    {
      idx: 9,
      titulo: 'The big bang theory temporada 10',
      short: 'The big bang theory temporada 10',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt10.jpg',
      fecha: '2016-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['/preview', // 1
        '/preview', // 2
        '/preview', // 3
        '/preview', // 4
        '/preview', // 5
        '/preview', // 6
        '/preview', // 7
        '/preview', // 8
        '/preview', // 9
        '/preview', // 10
        '/preview', // 11
        '/preview', // 12
        '/preview', // 13
        '/preview', // 14
        '/preview', // 15
        '/preview', // 16
        '/preview', // 17
        '/preview', // 18
        '/preview', // 19
        '/preview', // 20
        '/preview', // 21
        '/preview', // 22
        '/preview', // 23
        '/preview', // 24
      ]
    },
    {
      idx: 10,
      titulo: 'The big bang theory temporada 11',
      short: 'The big bang theory temporada 11',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt11.jpg',
      fecha: '2017-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['1SoRiEs8dbBHdRmmVQS5f9msAZfzNpp0m/preview', // 1
        '1BBB9bx6KsJmU68pmOhxWOFr8XOWkOEEH/preview', // 2
        '15CUnRuaOHALUYAVgi45etzy-gnLWV_ON/preview', // 3
        '1twhUbCS8L10Meh38CR9G0Eh7p2TJjNMU/preview', // 4
        '1d_IHubdCjDm4dY0evVmlJaffL1FGycxV/preview', // 5
        '1QnrAv6-nqfDukmmbD_qpEcgGdnqn1PJ5/preview', // 6
        '15AQehuaNIqRsmwlNJLdG8VoNqxGokgFt/preview', // 7
        '1NHdEgN1QaSFRngtYahGI1ktEeKvbQVT7/preview', // 8
        '1Pt3wcxPPCjAMsCcTk0sCOtl9_V9dJgAj/preview', // 9
        '1cKij3NWsPxZlbVjJap_B2-2Nn0ZfeQ4_/preview', // 10
        '1dq0XCz5C6V6cfaytAdx6f9OHa52Q63xR/preview', // 11
        '13-y-6dLqbJtgSg05wr-RzH1FPvRsiTOi/preview', // 12
        '14yxhENS6mh7mxp_Q_tfc9fqVX9yyIkf3/preview', // 13
        '1SsCLZNJVmIKLPYfoef3MW1bj9uhgVGpM/preview', // 14
        '1jxtg6AZh_gdVygVpxxWx7r8RlKwmYgNr/preview', // 15
        '1Dm99f79ar9DFtn8KEZVqcRmFBEtJ01EU/preview', // 16
        '1J2WmEwIgKnO6JxeEbEa7q4GV-Ra_tJQq/preview', // 17
        '1Se6lNWCaBYwx7cVIFnY0rKQ3AQR9UFoh/preview', // 18
        '1bWy-sIEkQVAVei4MWzCS7CWQtt40N6BY/preview', // 19
        '1kXRnpaYY2vDgooiYFtJ2Nk2IM_VWtOGV/preview', // 20
        '1GA6nWEfe4lmsIYwF5d-LZVyX8Mq-vm5L/preview', // 21
        '122yq7Ihc5egEsx63rnOx5DJXxX0qWH7D/preview', // 22
        '10kl3MhauYZSDZt-VGXzeGJtH2QvQ9D_6/preview', // 23
        '1ZadyIwLjezOYsnqef0PTOFCVe54W2SkK/preview', // 24
      ]
    },
    {
      idx: 11,
      titulo: 'The big bang theory temporada 12',
      short: 'The big bang theory temporada 12',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Leonard Hofstadter y Sheldon Cooper son físicos brillantes que trabajan en Cal Tech en Pasadena, California. Son colegas, mejores amigos y compañeros de cuarto, aunque en todas sus capacidades su relación siempre es probada principalmente por las formas regimentadas, profundamente excéntricas y no convencionales de Sheldon. También son amigos de sus colegas de Cal Tech, el ingeniero mecánico Howard Wolowitz y el astrofísico Rajesh Koothrappali. Los cuatro pasan su tiempo trabajando en sus proyectos de trabajo individuales, jugando videojuegos, viendo películas de ciencia ficción o leyendo cómics. Como son nerds autoproclamados, todos tienen poca o ninguna suerte con las mujeres. Cuando Penny, una mujer bonita y una aspirante a actriz de Omaha, se muda al departamento al otro lado del pasillo de Leonard y Sheldon, Leonard tiene otra aspiración en la vida.',
      img: 'assets/tbbt12.jpg',
      fecha: '2018-07-24',
      trailer: '9l4FSDqNsuk',
      // tslint:disable-next-line:max-line-length
      drive: ['1Jhv5QD1Xig6YPpBdLFFcgDkrC-JKcGvV/preview', // 1
        '/preview', // 2
        '/preview', // 3
        '/preview', // 4
        '/preview', // 5
        '/preview', // 6
        '/preview', // 7
        '/preview', // 8
        '/preview', // 9
        '/preview', // 10
        '/preview', // 11
        '/preview', // 12
        '/preview', // 13
        '/preview', // 14
        '/preview', // 15
        '/preview', // 16
        '/preview', // 17
        '/preview', // 18
        '/preview', // 19
        '/preview', // 20
        '/preview', // 21
        '/preview', // 22
        '1kiTl0nGc7hiYsupfcEYmnr6g-OT1OWzK/preview', // 23
      ]
    },
    {
      idx: 12,
      titulo: 'La casa de papel temporada 1 y 2',
      short: 'La casa de papel temporada 1 y 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Un grupo de ladrones únicos asalta la Fábrica de Moneda y Timbre para llevar a cabo el robo más perfecto en la historia de España y llevarse a casa 2.400 millones de euros.',
      img: 'assets/lcp1.jpg',
      fecha: '2019-05-02',
      trailer: 'nJ0Jik9Tokk',
      // tslint:disable-next-line:max-line-length
      drive: ['13g6XJNF69cvy_lDteTTno6Hmp3t1eE3w/preview', // 1
        '1258NbVc72aqp2ieubx0dhHfkzTsfxyCg/preview', // 2
        '145FKvvaVOaNDvaHayBrqwYLkp3xeitpn/preview', // 3
        '1sf8o35n5DgEY1BswuzqmcW0nKjSiJP9v/preview', // 4
        '1Kxk3NZXWf3bBJljKrtoMcfTkrudiy-n-/preview', // 5
        '1U43mPP7u3BOkMjyDFEl5HyNd6wM-_jR-/preview', // 6
        '1hUs3dutmNzeQWW0mzHwG6CkXflpFcqfc/preview', // 7
        '16RhLkqLJ8RV3GHqT9hZAq_PU25sR_Vsq/preview', // 8
        '1FQSKHBsYOs7nHViiVXqcaDM6-0v34zo7/preview', // 9
        '1qXOHhsthUAgrWejn7YzbHT_YDGcDde24/preview', // 10
        '1hejc2TdPmqDbR242fCXJoWQkOikKqTiq/preview', // 12
        '1ZFrlcFWPcxDos7cwI8pa7ZOXA58Vo-xc/preview', // 13
        '1MvsVpmhVKh4Ty3UscRBiXSmRXeAxEy3y/preview', // 14
        '1-UE6aRhWxA46ftmha-vsEkr3NA3yy4NV/preview', // 15
        '1yre6GNlGpsnPVEVVJAmTKCwlsX5IDhAx/preview', // 16
      ]
    },
    {
      idx: 13,
      titulo: 'La casa de papel temporada 3',
      short: 'La casa de papel temporada 3',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Un grupo de ladrones únicos asalta la Fábrica de Moneda y Timbre para llevar a cabo el robo más perfecto en la historia de España y llevarse a casa 2.400 millones de euros.',
      img: 'assets/lcp3.jpg',
      fecha: '2019-07-19',
      trailer: 'xQ3XC81uxLQ',
      // tslint:disable-next-line:max-line-length
      drive: ['1UStnAtU8kZmnZMNLmXDhxx2-z5GOu-gr/preview', // 1
        '1LOqaV8w-bdtNCw7KasIyvJ0xxcTuK0tw/preview', // 2
        '1d0M3Ru7xqe9elLv-YJ-SI-9FQZfYegWb/preview', // 3
        '1f2w0CSWSrF0vq4OVZMUajkvfLyDLeY-4/preview', // 4
        '1Wu_UBYpCD37Om1H4PkAy6qe3iTDsEwZV/preview', // 5
        '1BF7oU0qHsItKYtDJuhxGcBmKUsCzRDCa/preview', // 6
        '1zzcm2gBDOiJsWRcyjzlouiuaWAJ9LINy/preview', // 7
        '1Bcxp75qvfJl_h3uLHgUji476dM-PYUqT/preview', // 8
      ]
    },
    {
      idx: 14,
      titulo: 'Chernobyl HBO temporada 1',
      short: 'Chernobyl',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En abril de 1986, una gran explosión estalló en la central nuclear de Chernobyl, en el norte de Ucrania. Esta serie sigue las historias de los hombres y mujeres, que trataron de contener el desastre, así como de aquellos que dieron sus vidas para evitar uno posterior y peor.',
      img: 'assets/ch.jpg',
      fecha: '2019-04-06',
      trailer: 's9APLXM9Ei8',
      // tslint:disable-next-line:max-line-length
      drive: ['1rHJGD2P3vhaN3cNe91SXn5YIHMzF7sfj/preview', // 1
      ]
    },
    {
      idx: 15,
      titulo: 'Game of Thrones Temporada 1',
      short: 'Game of Thrones temporada 1',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En el continente mítico de Poniente, varias familias poderosas luchan por el control de los Siete Reinos. A medida que estalla el conflicto en los reinos de los hombres, un antiguo enemigo se levanta una vez más para amenazarlos a todos. Mientras tanto, los últimos herederos de un complot de la dinastía recientemente usurpado para recuperar su tierra natal del otro lado del Mar Estrecho. ',
      img: 'assets/got1.jpg',
      fecha: '2011-04-17',
      trailer: 'BpJYNVhGf1s',
      drive: ['1BcUb_Dg-9aXf5ZNUnCWRg_zY3LoT4_ec/preview', // 1
        '1p_Ae1BkMfuwtOtwUcRnpYk30snceLhSD/preview', // 2
        '1x7MzvxRD7G9U-sC0Uy2ZEbSm4vC_EgbT/preview', // 3
        '1pXIGpKE9SqAzu1lQVQJeMiGUqJhXPA2r/preview', // 4
        '1e0hWPed0JMwX_5RYtAkx_Ek98ubeDPRW/preview', // 5
        '1RKr8HC2lISX3EE_MfR3NN5tJqoxwxAd-/preview', // 6
        '1m6wpGde1ziFtfSAQEO9-JXXGMNSULI0I/preview', // 7
        '1ZeBe-jMsMjmjsMcqBNhl3YCcd49J-ong/preview', // 8
        '1lFAZhhpjhviXnVr3VbNvJLmzuwzJWwf3/preview', // 9
        '1WgzY8VIDNckwokCA-XA9hUrupLSdVJ8M/preview', // 10
      ]
    },
    {
      idx: 16,
      titulo: 'Game of Thrones Temporada 2',
      short: 'Game of Thrones temporada 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En el continente mítico de Poniente, varias familias poderosas luchan por el control de los Siete Reinos. A medida que estalla el conflicto en los reinos de los hombres, un antiguo enemigo se levanta una vez más para amenazarlos a todos. Mientras tanto, los últimos herederos de un complot de la dinastía recientemente usurpado para recuperar su tierra natal del otro lado del Mar Estrecho. ',
      img: 'assets/got2.jpg',
      fecha: '2011-04-17',
      trailer: 'Dv0UBTfnqdI',
      drive: ['1q2uZ4NzneSAIyARTrFeiP11db3kT8_mq/preview', // 1
        '17owwt1KS70hK9gcve1cU09mvPTN4j_-1/preview', // 2
        '1q9fM3hPJu9Qbqab7yF4IPF78Rphrxi-d/preview', // 3
        '1oTZcAe7331-3xdOeWsZF80RN_ynfnnn5/preview', // 4
        '14wIGwjgtZQBFKnecmX0f72wr6U-0ad_W/preview', // 5
        '1Me3AP4cs7-NmwVWJwbMJ0XW0OLG7IVHM/preview', // 6
        '1HJ2q9QQfoENAydQei6gKLYoM0-wKQTkH/preview', // 7
        '1erbEkhvZ8Zo4ITrPTG3gOn4rFH9b6nB0/preview', // 8
        '118xmL_CUaDWafUrSebbAjhFTRtCh3vjK/preview', // 9
        '1NK3E2bfTLtVTuFdBlIw48DhPXZjCfK14/preview', // 10
      ]
    },
    {
      idx: 17,
      titulo: 'Game of Thrones Temporada 3',
      short: 'Game of Thrones temporada 3',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En el continente mítico de Poniente, varias familias poderosas luchan por el control de los Siete Reinos. A medida que estalla el conflicto en los reinos de los hombres, un antiguo enemigo se levanta una vez más para amenazarlos a todos. Mientras tanto, los últimos herederos de un complot de la dinastía recientemente usurpado para recuperar su tierra natal del otro lado del Mar Estrecho. ',
      img: 'assets/got3.jpg',
      fecha: '2011-04-17',
      trailer: 'wBtkdje5OfY',
      drive: ['1JkfK11LkJQlj6mCXaPsb2g7_n-KLEqkt/preview', // 1
        '1alH0NOTfKJEdB1TCdA6F8XQvQhcACwlF/preview', // 2
        '1UdlRG4vQtNeR0JwYCSNsWnaAxL0B7Ypw/preview', // 3
        '1IYI2LU6t2DfiiYik1o2Jk0j6b14JTueU/preview', // 4
        '1IbUhki_-6x-xuLp4_GRQ6d4WAqwsHMAg/preview', // 5
        '1Ppt7cn3QUDE85rd_SOA_4IFjuwvXYuRT/preview', // 6
        '1qFWUCSvfujbN8LOaP1opAMWBzInTejEo/preview', // 7
        '1_FysiIq6zngNlT_zxdvjPaALNJcrhfdR/preview', // 8
        '1Y64rHVElllnvnlnS2KKj8z271nXOMM8-/preview', // 9
        '13yIr1nxjjZ4TMfQZ2El0BhTDeC13uOgN/preview', // 10
      ]
    },
    {
      idx: 18,
      titulo: 'Game of Thrones Temporada 4',
      short: 'Game of Thrones temporada 4',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En el continente mítico de Poniente, varias familias poderosas luchan por el control de los Siete Reinos. A medida que estalla el conflicto en los reinos de los hombres, un antiguo enemigo se levanta una vez más para amenazarlos a todos. Mientras tanto, los últimos herederos de un complot de la dinastía recientemente usurpado para recuperar su tierra natal del otro lado del Mar Estrecho. ',
      img: 'assets/got4.jpg',
      fecha: '2011-04-17',
      trailer: 'xZY43QSx3Fk',
      drive: ['17iskaa7A0MNMeerKvGlKLNpfqQDZmuLV/preview', // 1
        '1Ld09Y7jVxdei3Mof9PEOL1vUV09KwhBH/preview', // 2
        '10tXC5p1Xpqm6zNsYKABhLgV64didwmm_/preview', // 3
        '1D9R1ZzdyoqFB8kkf2kOMXYW7BGZDnUds/preview', // 4
        '1D6jYuCLW3SDqskT6baBJsPHbLJG4U7JS/preview', // 5
        '1d28WfQZywmtRXR6pahN2kkVdaVRK2B6h/preview', // 6
        '1FMe3vUbOHK4W5EqVPoK6SepW1NKMupMQ/preview', // 7
        '1i1fUQbKBDbMmUnc06Mgiaih4GJm-7qDi/preview', // 8
        '1nF_ANTu35mB-EWwiicUsXSeHR48KQNo0/preview', // 9
        '1cDdtDgsGiVZE6I0pFNhGhYTYmlpM51oQ/preview', // 10
      ]
    },
    {
      idx: 19,
      titulo: 'Game of Thrones Temporada 5',
      short: 'Game of Thrones temporada 5',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En el continente mítico de Poniente, varias familias poderosas luchan por el control de los Siete Reinos. A medida que estalla el conflicto en los reinos de los hombres, un antiguo enemigo se levanta una vez más para amenazarlos a todos. Mientras tanto, los últimos herederos de un complot de la dinastía recientemente usurpado para recuperar su tierra natal del otro lado del Mar Estrecho. ',
      img: 'assets/got5.jpg',
      fecha: '2011-04-17',
      trailer: 'A0pLbTXPHng',
      drive: ['15UNXBV9rLSNdJYujcJ6Z0WZOQ7BrD-lG/preview', // 1
        '13Q9OnsLeSkKZrAdQVIE31zdo5AcrFYoy/preview', // 2
        '10EI4IPnsmw_3k9Y6bhrUITxjKDLXRT9k/preview', // 3
        '1qbbuzfUmyuCh34u3ECN0-Tfy4K8hJcDy/preview', // 4
        '1LEhpxbeLef_vL_Qbf1jyyh2hJqSTzgE4/preview', // 5
        '1azOLT46a2_GYVJYJQSIzxYPROBYpflUE/preview', // 6
        '1wHcBFTD8Ow5CMN_1yf6AXCfsCa9UR3R1/preview', // 7
        '17BIGz0ltul86tkO3dGSloDIizIIKahiu/preview', // 8
        '149G0QmYFSh8uQ4XHNTn31WdDkch7DrM0/preview', // 9
        '1ojB6SOSYPvhS3ERUADuhzGddPTyvN0sg/preview', // 10
      ]
    },
    {
      idx: 20,
      titulo: 'Game of Thrones Temporada 6',
      short: 'Game of Thrones temporada 6',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En el continente mítico de Poniente, varias familias poderosas luchan por el control de los Siete Reinos. A medida que estalla el conflicto en los reinos de los hombres, un antiguo enemigo se levanta una vez más para amenazarlos a todos. Mientras tanto, los últimos herederos de un complot de la dinastía recientemente usurpado para recuperar su tierra natal del otro lado del Mar Estrecho. ',
      img: 'assets/got6.jpg',
      fecha: '2011-04-17',
      trailer: 'yu8eRaq1FUM',
      drive: ['1O8EJIlp9KLKaCgxFSOeN5mu5IrmVBnmE/preview', // 1
        '1M4udKPvfu-JER83RbtG0fkmOvJmZ7Mqc/preview', // 2
        '1Xh9uw6jglSG8EU3_rA5mF_gR4qBB-gy-/preview', // 3
        '1N1I5G6iEwvL7q6Ets8BWq-pMC9R2IT20/preview', // 4
        '1969oAjpxQMslySNGBAoJHTuup2FRqfkT/preview', // 5
        '1TbZXA_Iu4G-Sa-zWePzObD-PoLXcz2jx/preview', // 6
        '1qJP9akzI3oweffQgAXiKg6QRMblGrxb9/preview', // 7
        '1vTlLQkugpVkOSLFzSmaahkZGHI3odSFt/preview', // 8
        '10YYounZrDQv3i3NtOu69gR87k7PPHpeV/preview', // 9
        '1gfWXQ3W94RBPHZ097cLrlWIoPx7ZYKUn/preview', // 10
      ]
    },
    {
      idx: 21,
      titulo: 'Game of Thrones Temporada 7',
      short: 'Game of Thrones temporada 7',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En el continente mítico de Poniente, varias familias poderosas luchan por el control de los Siete Reinos. A medida que estalla el conflicto en los reinos de los hombres, un antiguo enemigo se levanta una vez más para amenazarlos a todos. Mientras tanto, los últimos herederos de un complot de la dinastía recientemente usurpado para recuperar su tierra natal del otro lado del Mar Estrecho. ',
      img: 'assets/got7.jpg',
      fecha: '2011-04-17',
      trailer: 'giYeaKsXnsI',
      drive: ['1N5M-vy4mZzyogzhTXctZhs6Q08n1YvDy/preview', // 1
        '1J6K5SGef69gx3LkF6694JXm8mPVcsJwX/preview', // 2
        '125FYNRUncBRoGMSU4IFwnFk203kjWrwx/preview', // 3
        '1XzsMgPh_86gUrjPUxa3UHa20hWw8awz8/preview', // 4
        '15OnAxGOwkw5YvquCn_X-OGQViu7lFx_D/preview', // 5
        '1t6tVuhkGzjhEqL3r0UFluL5h721f4RkV/preview', // 6
        '1_RaXYi0FqWXeMniFvelXaniJ9y1hOquc/preview', // 7
      ]
    },
    {
      idx: 22,
      titulo: 'Game of Thrones Temporada 8',
      short: 'Game of Thrones temporada 8',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En el continente mítico de Poniente, varias familias poderosas luchan por el control de los Siete Reinos. A medida que estalla el conflicto en los reinos de los hombres, un antiguo enemigo se levanta una vez más para amenazarlos a todos. Mientras tanto, los últimos herederos de un complot de la dinastía recientemente usurpado para recuperar su tierra natal del otro lado del Mar Estrecho. ',
      img: 'assets/got8.jpg',
      fecha: '2011-04-17',
      trailer: 'rlR4PJn8b8I',
      drive: ['1j2ybN4T5rSOUT8SwkcKl3nnF2Sy49NV4/preview', // 1
        '1ry4O85bXpxcQ1o-gZImpBuqiUs7-X1at/preview', // 2
        '1aivyQZJP68Txzb1iDeBNTBFpcscRDAgL/preview', // 3
        '1fLNRKkTwQazE-9s1_9Lrm4AbnzLtDmkC/preview', // 4
        '1BvCizQG3xeQeOeg69YFAA8op2JHnK8EE/preview', // 5
        '1elxQzruvzsoGALhj3c7uSdTSH_kGQRVZ/preview', // 6
      ]
    },
    {
      idx: 23,
      titulo: 'The Mandalorian Temporada 1',
      short: 'The Mandalorian Temporada 1',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después de las historias de Jango y Boba Fett, otro guerrero emerge en el universo de Star Wars. El Mandaloriano se establece después de la caída del Imperio y antes de la aparición de la Primera Orden. Seguimos las tribulaciones de un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República.',
      img: 'assets/mando.jpg',
      fecha: '2019-11-12',
      trailer: 'XmI7WKrAtqs',
      // tslint:disable-next-line:max-line-length
      drive: ['19ITj3xgT3J2-dQoGxLloa2VU7COdfm1s/preview', // 1
        '15hiXV3e4u1JFv4AOu0nKg37yaHp21j-C/preview', // 2
        '17U9cJzJAqVW7tqWJ4ex9L-BFGwvnvFXY/preview', // 3
        '1UfUEs1he2G0U_g8XH8UYWk5ZN0YPOC6q/preview', // 4
        '1RETdJCLjepDvsgP8FtFR3Wiw2nL9O4wN/preview', // 5
        '1ZeMa62H4LTJOOMUnabidEBxLFfx4Ct1y/preview', // 6
        '135Vghm3p4pg9tpOzJEj-Jt-q9lGSIMTF/preview', // 7
        '135Vghm3p4pg9tpOzJEj-Jt-q9lGSIMTF/preview', // 7
      ]
    },
    {
      idx: 24,
      titulo: 'El buen doctor temporada 1',
      short: 'El buen doctor temporada 1',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Shaun Murphy, un joven cirujano con autismo y síndrome sabio, se muda de una vida rural tranquila para unirse a una prestigiosa unidad quirúrgica de un hospital. Solo en el mundo e incapaz de conectarse personalmente con quienes lo rodean, Shaun usa sus extraordinarios dones médicos para salvar vidas y desafiar el escepticismo de sus colegas.',
      img: 'assets/tgd1.jpg',
      fecha: '2017-07-25',
      trailer: 'fYlZDTru55g',
      // tslint:disable-next-line:max-line-length
      drive: ['1I3LcPftsTM7JIwewX_dTPNewluK-6psr/preview', // 1
        '1xqBAKQolUwpPcsHQaU6jgGfsZJpux-mU/preview', // 2
        '1p31F2gCFHlRzQjYv1S_NnHtTgGw9SA65/preview', // 3
        '1hzwNmbCswVbfdzi9GGtOa7cByWmFSKR6/preview', // 4
        '1wK7AnLJtSKkW918lFdCXHDLJ0X64Igjm/preview', // 5
        '1EG2nQ2CJdkEVtSxlUvYWWKTvEBppQU7B/preview', // 6
        '1vkaKjVcBaV2r9XApTSpyZLcPbKN0L7xR/preview', // 7
        '1Ve8gcDZCezkCEenATuAs1Cg9NixMQGHj/preview', // 8
        '1PE50Xyexjq_sG49G4IKZiiEh8Nzs__2c/preview', // 9
        '1y7drhC_XO0xuWJCv8dYKxXDYQ1qiRceR/preview', // 10
        '164s8kUoizY6fcRHDpgwEMm7VCOjrvMC1/preview', // 11
        '13Zl1mL9MN3LCZAqHiyNvNwfJP_4b8XbB/preview', // 12
        '1FFeCjwwjKMA1gjtWtZYq2MJyIlNvkULt/preview', // 13
        '1pENofowWmz9vUWKUkmLl_b02XRpkCoU7/preview', // 14
        '15FTQQ86IkxwF0pXmv2azaM6wGbJJjrCX/preview', // 15
        '1D3ZUsODZmllRfjNNOHutArLBR2VFpvO_/preview', // 16
        '1qWo_9xITkGVwhZ-SPu-_quJw7NRHCJHJ/preview', // 17
        '10LNh2vRlwX1ACPrpRuCe7MPps94tVRnW/preview', // 18
      ]
    },
    {
      idx: 25,
      titulo: 'El buen doctor temporada 2',
      short: 'El buen doctor temporada 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Shaun Murphy, un joven cirujano con autismo y síndrome sabio, se muda de una vida rural tranquila para unirse a una prestigiosa unidad quirúrgica de un hospital. Solo en el mundo e incapaz de conectarse personalmente con quienes lo rodean, Shaun usa sus extraordinarios dones médicos para salvar vidas y desafiar el escepticismo de sus colegas.',
      img: 'assets/tgd2.jpg',
      fecha: '2018-07-25',
      trailer: 'V2pAT7jkK5c',
      // tslint:disable-next-line:max-line-length
      drive: ['1KpbbnW9WjHFzsIfWi1oLNWEjbj510tlq/preview', // 1
        '1ROh_AK67SxTsb3AkTlzh3UXUt_vf0Flg/preview', // 2
        '1_PuxWLrzIFeDBvpio53A2wtTRBlC4q6L/preview', // 3
        '19LUWQAfuIj0b1wXEQLh_GoEus2vrjMWV/preview', // 4
        '1AxdGbaFA_vkJu8b0DCeUtLXbYHv9MiAO/preview', // 5
        '1pw4E0NW1qCKMtSHkAd7p1Luxh_iL_Ddv/preview', // 6
        '1aWnkmbjwaAWrK75T8Ro3kI2HNVpSJZ_3/preview', // 7
        '1l0oI_vblCmbxaEiNw3jAh8Lr292cjAaI/preview', // 8
        '1N2PjNGxMItc5DqM1XNOkf1oCMvCDAqJ7/preview', // 9
        '1h8sEd_yggPqO4ythAx0iYv7gpnVHsRXg/preview', // 10
        '1BDULM_kckTYlYY5pwejHbw9wuguJj9yL/preview', // 11
        '1asUaCJZEBN6L7kxpgMGKJe4bF4hQ8_z3/preview', // 12
        '1loPmZi0-BqgCVPy6wTOVxt6kRR9dnl_K/preview', // 13
        '1Jw8BektSE5cvPcqMjdBRuNt-R05dAfNu/preview', // 14
        '1zsAWJT3rHFxt9cc-27O629QWnTQum-y2/preview', // 15
        '1d4r2X1iqCqv0kC7dlpd9XeULF0C9YMFw/preview', // 16
        '14rIXlUBDIyB55ol3ZQ8WDJuhohcV33st/preview', // 17
        '1PwxKeh0G7TU0rl9AMWoap9e46jcTI35s/preview', // 18
      ]
    },
    {
      idx: 26,
      titulo: 'The Witcher temporada 1',
      short: 'The Witcher temporada 1',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Geralt de Rivia, un cazador de monstruos solitario, lucha por encontrar su lugar en un mundo donde las personas a menudo son más malvadas que las bestias.',
      img: 'assets/tw1.jpg',
      fecha: '2019-12-20',
      trailer: 'ETY44yszyNc',
      // tslint:disable-next-line:max-line-length
      drive: ['1_fNBbsNGSUqS-R12aiuOMejeuU67chsy/preview', // 1
        '1xNQ5UipB9eGLdndIbxfhlqtmxieWHDEo/preview', // 2
        '1-QAYH3fubJu2fnHaTUdNIWuxH4jJdf2M/preview', // 3
        '1XoXwvZhhPzfrELJ6wMpU25n05SeuFlUX/preview', // 4
        '16kNINBK3uhVQJ6Mnmdmb6PSPSg66sxIu/preview', // 5
        '1L-On1AvZqx-ApOGER3Pk0XFJcPP2jHd2/preview', // 6
        '18mj3oVM32TQyx3J2bhpcq5mCUWRc8xD5/preview', // 7
        '1A8V8CcO4Alevh-FluIc-BRSwQ5gQdXlS/preview', // 8
      ]
    },
    {
      idx: 27,
      titulo: 'El buen doctor temporada 3',
      short: 'El buen doctor temporada 3',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Shaun Murphy, un joven cirujano con autismo y síndrome sabio, se muda de una vida rural tranquila para unirse a una prestigiosa unidad quirúrgica de un hospital. Solo en el mundo e incapaz de conectarse personalmente con quienes lo rodean, Shaun usa sus extraordinarios dones médicos para salvar vidas y desafiar el escepticismo de sus colegas.',
      img: 'assets/tgd3.jpg',
      fecha: '2020-02-07',
      trailer: 'DbzgeoLFqg0',
      // tslint:disable-next-line:max-line-length
      drive: ['1KgU_HnO2sFaFys6FhHSHFN8Bmb_kfvPK/preview', // 1
        '11wsvIV4SVFwcSTgZrc_t6sbkOvTOQBJV/preview', // 2
        '1FXApmHcUz0e6yblrtJgje-EODXnOGBG0/preview', // 3
        '1KHA5XAWfwm6fptgKkr2hUEhY7ukFhr-l/preview', // 4
        '1NCdOXNt7oX9IWe6bYnBE9_kWMt3NxU3H/preview', // 5
        '1H4AslEOasnXiOU5p89aY0mhB7awhVJmr/preview', // 6
        '1G3jUjQCwDSL63XDLcSzIQqyDszjVBQCI/preview', // 7
        '1oZKO92_cNFO4ud5gwTztaESmIlZBpsPt/preview', // 8
        '1krbW9zVbiSEC1xr6CpgJCLbBtf2BCbDp/preview', // 9
        '1Z15ko1IgDCIqo-3VqoM5boW0-HyjalnK/preview', // 10
      ]
    },
  ];
  getPeliculas(): Series[] {
    return this.peliculas;
  }

  getPelicula(idx: string) {
    return this.peliculas[idx];
  }
  buscarPeliculas(termino: string): Series[] {

    const peliculaArr: Series[] = [];
    termino = termino.toLowerCase();

    for (const pelicula of this.peliculas) {

      const titulo = pelicula.short.toLowerCase();

      if (titulo.indexOf(termino) >= 0) {
        peliculaArr.push(pelicula);
      }

    }

    return peliculaArr;

  }
}
export interface Series {
  idx?: number;
  short: string;
  titulo: string;
  sinopsis: string;
  img: string;
  fecha: string;
  trailer: string;
  drive: string[];
}
