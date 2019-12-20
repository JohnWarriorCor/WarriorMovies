import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaDvdripBdService {

  private peliculas: Peliculas[] = [
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
      titulo: 'La casa de papel temporada 1 y 2',
      short: 'La casa de papel temporada 1 y 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Un grupo de ladrones únicos asalta la Fábrica de Moneda y Timbre para llevar a cabo el robo más perfecto en la historia de España y llevarse a casa 2.400 millones de euros.',
      img: 'assets/lcp1.jpg',
      fecha: '2017-05-02',
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
      idx: 2,
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
      idx: 3,
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
      idx: 4,
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
      idx: 5,
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
      idx: 6,
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
      idx: 7,
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
      idx: 8,
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
      idx: 9,
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
      idx: 10,
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
      idx: 11,
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
      idx: 12,
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
            ]
    },
    {
      idx: 13,
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
            ]
    },
    {
      idx: 14,
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
  ];
  getPeliculas(): Peliculas[] {
    return this.peliculas;
  }

  getPelicula(idx: string) {
    return this.peliculas[idx];
  }
  buscarPeliculas(termino: string): Peliculas[] {

    const peliculaArr: Peliculas[] = [];
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
export interface Peliculas {
  idx?: number;
  short: string;
  titulo: string;
  sinopsis: string;
  img: string;
  fecha: string;
  trailer: string;
  drive: string[];
}
