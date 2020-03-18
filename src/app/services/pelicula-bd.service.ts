import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaBdService {

  private peliculas: Peliculas[] = [
    {
      idx : 0,
      titulo: 'Forrest Gump',
      short: 'Forrest Gump',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Forrest Gump es un hombre sencillo con un coeficiente intelectual bajo pero buenas intenciones. Está atravesando la infancia con su mejor y única amiga Jenny. Su mamá le enseña los modos de vida y lo deja elegir su destino. Forrest se une al ejército para el servicio en Vietnam, encuentra nuevos amigos llamados Dan y Bubba, gana medallas, crea una famosa flota de pesca de camarones, inspira a la gente a trotar, comienza una locura de ping-pong, crea el smiley, escribe calcomanías y canciones, dona a la gente y se encuentra con el presidente varias veces. Sin embargo, todo esto es irrelevante para Forrest, que solo puede pensar en su amor de la infancia, Jenny Curran, que ha arruinado su vida. Aunque al final todo lo que quiere demostrar es que cualquiera puede amar a cualquiera.',
      img: 'assets/fg.jpg',
      tirilla: 'assets/hd.png',
      fecha: '1994-07-23',
      trailer: 'bLvqoHBptjg',
      drive: '1gbvoxtalfSPUAR6Dp9HjyF9D3sHlc9QV/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 1,
      titulo: 'El castigador',
      short: 'the punisher',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El agente especial Frank Castle lo tenía todo: una familia amorosa, una gran vida y un trabajo aventurero. Pero cuando un criminal despiadado y sus asociados le quitan la vida, Frank renace. Ahora sirviendo como juez, jurado y verdugo, es un nuevo tipo de vigilante para librar una guerra de un solo hombre contra aquellos que lo han hecho mal.',
      img: 'assets/tp.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2004-04-16',
      trailer: 'q7CMnRv8Mqc',
      drive: '1FxDEu10HBls3MRm4cOSY49hFpXmlHmux/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 2,
      titulo: '¿Por qué él?',
      short: '¿Por qué él?',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Durante las vacaciones, Ned, un padre sobreprotector pero amoroso, y su familia visitan a su hija en Stanford, donde conoce a su mayor pesadilla: su novio millonario, Silicon Valley, bien intencionado pero socialmente incómodo. La rivalidad se desarrolla y el nivel de pánico de Ned se dispara cuando se encuentra perdido en este glamoroso mundo de alta tecnología y descubre que Laird está a punto de hacer esta pregunta.',
      img: 'assets/pqe.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2016-12-23',
      trailer: 'EctQd9h9ez0',
      drive: '1SoYLpC7LozZrplmNnGJuVg6EHrWv3stn/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 3,
      titulo: 'Chappie',
      short: 'Chappie',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En Johannesburgo, el departamento de policía redujo la alta tasa de criminalidad utilizando robots de la Compañía Tetravaal, diseñada por el ingeniero Deon Wilson. El ex militar Vincent Moore tiene envidia de Deon, ya que ha desarrollado otro proyecto llamado Moose, pero ni Tetravaal ni el departamento de policía están interesados. Deon acaba de desarrollar una Inteligencia Artificial, pero la CEO de Tetravaal, Michelle Bradley, le pide que suspenda el proyecto. Deon decide traer el Robot 22 dañado que fue enviado para ser aplastado para probar su IA. Sin embargo, es secuestrado por los criminales Ninja, Yo-Landi y Amerika que quieren que detenga a los policías robot. Cuando ven el robot dañado en la camioneta, obligan a Deon a programarlo para robar bancos con ellos y lo llaman Chappie. Sin embargo, Chappie actúa como un niño y necesita ser entrenado para aprender y crecer.',
      img: 'assets/cha.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2015-03-06',
      trailer: 'Qid_7GfI7eM',
      drive: '16l0-2SGqmD-TJPXJy20Wz027HjMY4PuH/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 4,
      titulo: 'Dirty Grandpa',
      short: 'Mi abuelo es un peligro',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Jason Kelly, el nieto de Dick Kelly, pierde a su abuela unas dos semanas antes de su boda con Meredith. Intenta ayudar a su abuelo y consolarlo por su pérdida, pero fue engañado en un viaje por carretera de vacaciones de primavera; persiguiendo a la juventud una vez más. Con la ayuda de Shadia y Lenore, los dos hombres se embarcan en una aventura que nunca olvidarán.',
      img: 'assets/map.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2016-01-22',
      trailer: 'aZSzMIFZT7Q',
      drive: '13VV6Nb_PJCXK8cH6nHtn6Gl-_Cabna5S/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 5,
      titulo: 'Liga de la justicia',
      short: 'Liga de la justicia',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Impulsado por su fe restaurada en la humanidad e inspirado por el acto desinteresado de Superman, Bruce Wayne solicita la ayuda de su nueva aliada, Diana Prince, para enfrentarse a un enemigo aún mayor. Juntos, Batman y Wonder Woman trabajan rápidamente para encontrar y reclutar un equipo de metahumanos para enfrentar esta amenaza recién despertada. Pero a pesar de la formación de esta liga de héroes sin precedentes: Batman, Wonder Woman, Aquaman, Cyborg y The Flash, ya puede ser demasiado tarde para salvar al planeta de un asalto de proporciones catastróficas. ',
      img: 'assets/dc.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2017-11-17',
      trailer: 'NUiCZhWEzAY',
      drive: '11Td4AKIYi7P9tEgnXX6wrltqGLcVIJ98/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 6,
      titulo: 'Mazinger Z: INFINITY',
      short: 'Mazinger Z: INFINITY',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Hace diez años, el científico villano Dr. Hell dirigió a sus malvados seguidores, conocidos como el Imperio Subterráneo, en una lucha para destruir a toda la humanidad. Fue contra estas fuerzas que luchó el joven héroe Koji Kabuto, pilotando el legendario súper robot "Mazinger Z". La victoria de Koji detuvo el malvado plan del Dr. Hell y devolvió la paz a la Tierra. Ahora Koji ha dejado atrás el asiento del piloto y se ha convertido en un científico por derecho propio, siguiendo los pasos de su padre y su abuelo. Sin embargo, un encuentro inesperado en las profundidades del monte. Fuji desencadena una amenaza aún mayor para la humanidad que nunca y altera el destino de Koji para siempre. Con el destino de la humanidad en sus manos, Koji y Mazinger Z enfrentan una elección entre el bien y el mal.',
      img: 'assets/mzg.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2018-02-11',
      trailer: 'aU_Zjz8A0sk',
      drive: '18lb6221FkJSKV52vRHxrYrEZNPw_R1X6/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 7,
      titulo: 'Bohemian Rhapsody',
      short: 'Bohemian Rhapsody',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Bohemian Rhapsody es una celebración de Queen, su música y su extraordinario cantante Freddie Mercury. Freddie desafió los estereotipos y la convención destrozada para convertirse en uno de los artistas más queridos del planeta. La película traza el ascenso meteórico de la banda a través de sus canciones icónicas y su sonido revolucionario. Alcanzan un éxito sin igual, pero en un giro inesperado Freddie, rodeado de influencias más oscuras, rehuye a Queen en la búsqueda de su carrera en solitario. Habiendo sufrido mucho sin la colaboración de Queen, Freddie logra reunirse con sus compañeros de banda justo a tiempo para Live Aid. Mientras enfrenta valientemente un reciente diagnóstico de SIDA, Freddie lidera la banda en una de las mejores actuaciones en la historia de la música rock. Queen consolida un legado que continúa inspirando a extraños, soñadores y amantes de la música hasta nuestros días.',
      img: 'assets/br.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2018-10-31',
      trailer: 'mP0VHJYFOAU',
      drive: '1m5tWDL_RZ3vUOup1z5ToxAiynAIj20xM/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 8,
      titulo: 'THE HUSTLE',
      short: 'Timadoras compulsivas',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Dos estafadoras, una de baja renta y la otra de clase alta, se unen para derrotar a los hombres que las han perjudicado.',
      img: 'assets/hus.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-05-10',
      trailer: 'ayaEM3mxdqM',
      drive: '1yhGIuQlWCVBwxB3C7BM-ZvKxdokWaTNW/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 9,
      titulo: 'Overboard',
      short: 'Un mar de enredos',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Kate Sullivan es una madre soltera de tres hijas que trabaja en dos trabajos mientras estudia para ser enfermera. Le asignan limpiar alfombras en un yate propiedad del playboy mimado y arrogante Leonardo (Leo) Montenegro. Leo hace comentarios groseros hacia Kate y la despide sin paga cuando se niega a traerle comida. Cuando Kate grita su comportamiento, Leo la empuja fuera del bote junto con su equipo de limpieza. Mientras tanto, en México, las hermanas Magdalena y Sofía de Leo atienden a su padre enfermo. Furioso cuando Leo es anunciado como su sucesor para dirigir la empresa familiar, Magda decide visitarlo. Esa noche, Leo se desliza del yate y cae al océano sin ser visto. Se despierta en una playa con amnesia y sin recordar su identidad. Vaga por la ciudad y finalmente llega al hospital. Magda lo encuentra y lo deja allí sin reclamar después de enterarse de que tiene amnesia. Ella regresa a casa e informa falsamente que Leo ha muerto. Sofía sospecha que Magda está mintiendo ...',
      img: 'assets/ov.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2018-06-27',
      trailer: 'x5IJbZ5SyBI',
      drive: '1--7kI0oECmSsYR9G6janFP-yj9fV4lku/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 10,
      titulo: 'coco',
      short: 'coco',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'A pesar de la desconcertante prohibición de música de su familia durante generaciones, Miguel sueña con convertirse en un músico consumado como su ídolo, Ernesto de la Cruz. Desesperado por demostrar su talento, Miguel se encuentra en la impresionante y colorida Tierra de los Muertos siguiendo una misteriosa cadena de eventos. En el camino, conoce al encantador embaucador Héctor, y juntos, emprenden un viaje extraordinario para descubrir la verdadera historia detrás de la historia familiar de Miguel.',
      img: 'assets/coco.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2017-12-01',
      trailer: 'awzWdtCezDo',
      drive: '1DBfPRW52x7llVeaneYEoBC6TdwKnwg5A/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 11,
      titulo: 'Deadpool 2',
      short: 'Deadpool 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después de perder a Vanessa (Morena Baccarin), el amor de su vida, el mercenario que rompe la cuarta pared, Wade Wilson, también conocido como Deadpool (Ryan Reynolds), debe reunir un equipo y proteger a un joven mutante, Russell Collins, también conocido como Firefist (Julian Dennison) de Cable (Josh Brolin), un cyborg peligroso y sin sentido del futuro, y también debe aprender la lección más importante de todas: ser parte de una familia nuevamente.',
      img: 'assets/dp2.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2018-05-18',
      trailer: 'D86RtevtfrA',
      drive: '1DmSaOFV0hQKQnIzM9h4IFXQt1cTV0loy/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 12,
      titulo: 'Deadpool',
      short: 'Deadpool',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Esta es la historia de origen del ex operativo de las Fuerzas Especiales convertido en mercenario Wade Wilson, quien luego de ser sometido a un experimento deshonesto que lo deja con poderes curativos acelerados, adopta el alter ego Deadpool. Armado con sus nuevas habilidades y un sentido del humor oscuro y retorcido, Deadpool persigue al hombre que casi destruye su vida.',
      img: 'assets/dp1.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2016-02-19',
      trailer: '0JnRdfiUMa8',
      drive: '1ngzMlMK8yzuteBS4vJ8oy2gMV34TctdT/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 13,
      titulo: 'A 2 metros de ti',
      short: 'a dos metros de ti',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Stella, de diecisiete años, pasa la mayor parte de su tiempo en el hospital como paciente con fibrosis quística. Su vida está llena de rutinas, límites y autocontrol, todo lo cual se pone a prueba cuando conoce a Will, un adolescente increíblemente encantador que tiene la misma enfermedad. Hay un coqueteo instantáneo, a través de restricciones que dictan que deben mantener una distancia segura entre ellos. A medida que su conexión se intensifica, también lo hace la tentación de tirar las reglas por la ventana y abrazar esa atracción. El amor no tiene límites',
      img: 'assets/2mt.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-09-13',
      trailer: 'cdZEItD8WX0',
      drive: '12GQtvFjGA50Nfw2KJKYLwFWudPgvLOdW/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 14,
      titulo: 'what man want',
      short: '¿En qué piensan los hombres?',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Los agentes deportivos masculinos encerran a una mujer en su profesión, pero adquiere una ventaja inesperada sobre ellos cuando desarrolla la capacidad de escuchar los pensamientos de los hombres.',
      img: 'assets/wmw.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-02-08',
      trailer: 'HeoLiTirRp4',
      drive: '1z-FMwaa1jDGFE_U-9bcKd_LjGFpww3em/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 15,
      titulo: 'Dumbo',
      short: 'Dumbo',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Holt fue una vez una estrella de circo, pero se fue a la guerra y cuando regresó, lo había alterado terriblemente. El dueño del circo Max Medici (Danny DeVito) lo contrata para cuidar a Dumbo, un elefante recién nacido cuyas orejas de gran tamaño lo convierten en el hazmerreír de la luchadora compañía de circo. Pero cuando los niños de Holt descubren que Dumbo puede volar, el empresario de lengua plateada VA Vandevere (Michael Keaton) y la artista aérea Colette Marchant (Eva Green) se precipitan para convertir al pequeño elefante en una estrella.',
      img: 'assets/dumbo.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-03-29',
      trailer: '7NiYVoqBt-8',
      drive: '1asJIBWVocgwP-0JnMZfDh1t3r835mPTu/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 16,
      titulo: 'Happy Death Day 2',
      short: 'Feliz día de tu muerte 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después de haber sobrevivido a los hechos absurdos pero que ponen en peligro la vida en Feliz día de tu muerte (2017), la luchadora hermandad de mujeres, Tree Gelbman, se encuentra en el mismo dormitorio de la universidad, agradecida de estar viva. Sin embargo, esta vez, es el compañero de cuarto de Carter, Ryan, quien afirma que está reviviendo el mismo día paradójico una y otra vez, como un misterioso asesino paranoico con una máscara de cara de bebé de un solo diente con un gran cuchillo de cocina que se ha acostumbrado a asesinándolo En esas circunstancias, un valiente pero vano intento de enfrentar el desafío, una vez más, enviará a Tree de vuelta al punto de partida, atrapado en un ciclo de tiempo demasiado familiar y empapado de sangre. ¿Cuántas muertes separan a Tree de un cumpleaños verdaderamente feliz?',
      img: 'assets/hdd2.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-02-19',
      trailer: '_DxsjDpriX0',
      drive: '1ef8TwwSHSXnLiLNMttwG1VVvgxx2XIZP/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 17,
      titulo: 'Happy Death Day',
      short: 'Feliz día de tu muerte',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Una adolescente, tratando de disfrutar su cumpleaños, pronto se da cuenta de que este es su último cumpleaños. Es decir, si ella puede descubrir quién es su asesino. Ella debe revivir ese día, una y otra vez, muriendo de una manera diferente cada vez. ¿Puede ella resolver su propio asesinato?',
      img: 'assets/hdd1.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2017-11-10',
      trailer: 'n4gaz7w1E5E',
      drive: '1Q8q6Y9EfsTezfY-nG_8UshVE5T9hlm3B/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 18,
      titulo: 'Toy Story 4',
      short: 'Toy Story 4',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Woody, Buzz Lightyear y el resto de la pandilla se embarcan en un viaje por carretera con Bonnie y un nuevo juguete llamado Forky. El viaje aventurero se convierte en una reunión inesperada cuando el pequeño desvío de Woody lo lleva a su amigo Bo Peep, perdido hace mucho tiempo. Mientras Woody y Bo discuten los viejos tiempos, pronto comienzan a darse cuenta de que están separados por dos mundos cuando se trata de lo que quieren de la vida como un juguete.',
      img: 'assets/toy4.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-06-21',
      trailer: 'wmiIUN-7qhE',
      drive: '1FdkIicO8Sp8kFkH0sqZN1R2rYjNqxx_d/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 19,
      titulo: 'Dectetive Pikachu',
      short: 'Pokémon: Detective Pikachu',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'La historia comienza cuando el detective Harry Goodman desaparece misteriosamente, lo que lleva a su hijo Tim de 21 años a averiguar qué sucedió. Ayudando en la investigación está el antiguo compañero Pokémon de Harry, el Detective Pikachu: un súper detective adorable, hilarante y sabio que es un misterio incluso para sí mismo. Al descubrir que están equipados de manera única para comunicarse entre sí, Tim y Pikachu unen fuerzas en una emocionante aventura para desentrañar el misterio enredado. Persiguiendo pistas por las calles iluminadas con neón de Ryme City, una metrópolis moderna y extensa donde los humanos y los Pokémon viven codo con codo en un mundo hiperrealista de acción en vivo, se encuentran con un elenco diverso de personajes Pokémon y descubren un impactante trama que podría destruir esta coexistencia pacífica y amenazar a todo el universo Pokémon.',
      img: 'assets/pik.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-04-10',
      trailer: 'XzCj0lGfveU',
      drive: '1TJA1J691Md4otp94WvnEWorKe9-mHX2C/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 20,
      titulo: 'El rey león',
      short: 'El rey león',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después del asesinato de su padre, un joven príncipe león huye de su reino solo para aprender el verdadero significado de responsabilidad y valentía.',
      img: 'assets/rl.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-07-19',
      trailer: '7TavVZMewpY',
      drive: '14jkgjqqcrxq_-UMht5xWfGSNkHLjxs_5/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 21,
      titulo: 'PETS 2',
      short: 'LA VIDA SECRETA DE TUS MASCOTAS',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Max enfrenta algunos cambios importantes después de que su dueña Katie se case y ahora tenga un hijo. En un viaje familiar al campo, Max conoce a un perro de granja llamado Rooster, y ambos intentan superar sus miedos. Mientras tanto, Gidget intenta rescatar el juguete favorito de Max de un apartamento lleno de gatos, y Snowball se embarca en una misión para liberar a un tigre blanco llamado Hu de un circo.',
      img: 'assets/pets2.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-06-07',
      trailer: 'mYocfuqu2A8',
      drive: '1pZIEVuFaqfionHbc51xa7q4P4yBV-CHH/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 22,
      titulo: 'Star Wars 8',
      short: 'Star Wars: Los últimos Jedi',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El Maestro Jedi en la clandestinidad Luke Skywalker intenta involuntariamente guiar al joven y esperanzado Rey en los caminos de la fuerza, mientras que Leia, ex princesa convertida en general, intenta alejar lo que queda de la Resistencia del despiadado tiránico tiroteo de la Primera Orden.',
      img: 'assets/sw8.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2017-12-14',
      trailer: 'Q0CbN8sfihY',
      drive: '18OlpXKHZsUqRGWNDC3ctIL7S1nw8Tdqj/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 23,
      titulo: 'Hobbs & Shaw',
      short: 'Fast & Furious: Hobbs & Shaw',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El abogado Luke Hobbs y el marginado Deckard Shaw forman una alianza improbable cuando un villano cibernéticamente mejorado amenaza el futuro de la humanidad.',
      img: 'assets/FYF.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-07-01',
      trailer: 'EVH78PvQCTE',
      drive: '10UqgAtOdloE_T8tjPc8wrMcLf2_q5Yi7/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 24,
      titulo: 'John Wick 3',
      short: 'John Wick: Capítulo 3 - Parabellum',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En esta tercera entrega de la franquicia de acción alimentada con adrenalina, el experto asesino John Wick (Keanu Reeves) regresa con un precio de $ 14 millones en su cabeza y un ejército de asesinos de caza recompensas en su camino. Después de matar a un miembro del clan clandestino internacional de asesinos, la Mesa Alta, John Wick está excomulgado, pero los asesinos y sicarios más despiadados del mundo esperan su turno.',
      img: 'assets/jw3.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-04-31',
      trailer: 'EgrnoeE619o',
      drive: '1VEM7mJY0cfSUr4bnuklRcbeCCCCldHWk/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 25,
      titulo: 'Dora',
      short: 'Dora y la ciudad perdida',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después de pasar la mayor parte de su vida explorando la jungla con sus padres, nada podría preparar a Dora para su aventura más peligrosa: la escuela secundaria. Siempre la exploradora, Dora se encuentra rápidamente liderando a Boots, Diego, un misterioso habitante de la jungla y un grupo de adolescentes en una aventura de acción en vivo para salvar a sus padres y resolver el misterio imposible detrás de una civilización inca perdida.',
      img: 'assets/dora.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-08-30',
      trailer: 'gUTtJjV852c',
      drive: '1YzENQfYabjkCkicPFvzN73ctQW5RrNqb/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 26,
      titulo: 'la dama y el vagabundo',
      short: 'la dama y el vagabundo',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'CGI y reinvención de acción real del clásico de Disney de 1955.',
      img: 'assets/ldv.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-11-12',
      trailer: 'A2ZDDU34gYw',
      drive: '19ndXArwWcP_JX-UxibIGrGpQ8UHgyyRK/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 27,
      titulo: 'Bumblebee',
      short: 'Bumblebee',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En Cybertron, los Autobots, liderados por Optimus Prime, están a punto de perder la Gran Guerra Cybertroniana ante sus enemigos, los Decepticons, y comienzan a hacer preparativos para abandonar el planeta. Los Decepticons liderados por Shockwave, Soundwave y Starscream los emboscan durante la evacuación, y Optimus envía a un joven explorador, B-127, a la Tierra para establecer una base de operaciones donde los Autobots puedan reagruparse. El B-127 llega a la Tierra solo en 1987, aterriza de manera forzada en California e interrumpe un ejercicio de entrenamiento que realiza el Sector 7, una agencia secreta del gobierno que monitorea la actividad extraterrestre en la Tierra. El agente del sector 7, el coronel Jack Burns, presume que B-127 es un invasor hostil y ataca, conduciendo a B-127 al bosque, donde es emboscado por el Decepticon Blitzwing. Cuando B-127 se niega a revelar el paradero de Optimus, Blitzwing arranca rencorosamente su caja de voz y daña su núcleo de memoria. B-127 logra destruir Blitzwing antes de colapsar de sus heridas. Antes de entrar en estasis, ...',
      img: 'assets/bb.jpg',
      tirilla: 'assets/dvd.png',
      fecha: '2018-12-28',
      trailer: 'lcwmDAYt22k',
      drive: '1n5iONfl04dClBibO-kgpbYk-7CqY2hUR/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 28,
      titulo: 'AMERICAN PIE 8',
      short: 'AMERICAN PIE: EL REENCUENTRO',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Ha pasado más de una década y la pandilla regresó a East Great Falls, Michigan, para el fin de semana. Descubrirán cómo se han desarrollado sus vidas a medida que se reúnen para su reunión de secundaria. ¿Cómo ha tratado la vida a Michelle, Jim, Heather, Oz, Kevin, Vicky, Finch, Stifler y la madre de Stifler? En el verano de 1999, fueron cuatro niños en una búsqueda para perder su virginidad. Ahora Kara es una linda estudiante de secundaria que busca al chico perfecto para perder su virginidad.',
      img: 'assets/amp8.jpg',
      tirilla: 'assets/dvd.png',
      fecha: '2012-04-04',
      trailer: 'DxBxqbsGlK0',
      drive: '1faLxvGMlS85QoFfi2WF65AP5G77ElKxm/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 29,
      titulo: 'Belleza oculta',
      short: 'Belleza inesperada',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Cuando un exitoso ejecutivo de publicidad de Nueva York sufre una gran tragedia, se retira de la vida. Mientras sus amigos preocupados intentan desesperadamente volver a conectarse con él, él busca respuestas del universo escribiendo cartas a Amor, Tiempo y Muerte. Pero no es hasta que sus notas traen respuestas personales inesperadas que comienza a comprender cómo estas constantes se entrelazan en una vida plenamente vivida, y cómo incluso la pérdida más profunda puede revelar momentos de significado y belleza.',
      img: 'assets/bi.jpg',
      tirilla: 'assets/dvd.png',
      fecha: '2016-12-23',
      trailer: 'aYuELL1j5_E',
      drive: '1nOnaC2aQ6qKDMSzpvie9cz7NuFDHPA2f/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 30,
      titulo: 'Ready Player One',
      short: 'Ready Player One',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En el año 2045, el mundo real es un lugar duro. La única vez que Wade Watts (Tye Sheridan) realmente se siente vivo es cuando escapa al OASIS, un universo virtual inmersivo donde la mayoría de la humanidad pasa sus días. En el OASIS, puedes ir a cualquier parte, hacer cualquier cosa, ser cualquiera, los únicos límites son tu propia imaginación. El OASIS fue creado por el brillante y excéntrico James Halliday (Mark Rylance), quien dejó su inmensa fortuna y control total del Oasis al ganador de un concurso de tres partes que diseñó para encontrar un heredero digno. Cuando Wade conquista el primer desafío de la búsqueda del tesoro que dobla la realidad, él y sus amigos, también conocidos como High Five, son arrojados a un universo fantástico de descubrimiento y peligro para salvar al OASIS.',
      img: 'assets/rpo.jpg',
      tirilla: 'assets/dvd.png',
      fecha: '2018-03-29',
      trailer: 'cSp1dM2Vj48',
      drive: '1lKGPGdtKDgttnBBziYNWQjw0ul_JejT3/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 31,
      titulo: 'Anabelle 3',
      short: 'Annabelle vuelve a casa',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Decididos a evitar que Annabelle causara más estragos, los demonólogos Ed y Lorraine Warren llevan la muñeca poseída a la sala de artefactos cerrada en su casa, colocándola "a salvo" detrás de un cristal sagrado y reclutando la bendición del sacerdote. Pero una noche impía de horror aguarda cuando Annabelle despierta a los espíritus malignos en la habitación, quienes se enfocan en un nuevo objetivo: Judy, la hija de diez años de los Warren, y sus amigas.',
      img: 'assets/an3.jpg',
      tirilla: 'assets/dvd.png',
      fecha: '2018-07-12',
      trailer: 'KUnKWjeQA9A',
      drive: '1bRx_qxJ0eJjmzp3d9XaUBJb8ULMkKVfW/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 32,
      titulo: 'X-Men Fénix Oscura',
      short: 'X-Men Fénix Oscura',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Los X-Men. Protectores de la paz. Jean Gray es uno de los X-Men más queridos. Pero cuando una misión sale mal, Jean está expuesta a un poder oscuro y antiguo. Este poder ha destruido todo con lo que entra en contacto, hasta ella. Ahora que este poder se está volviendo inestable, lo libera con destrucción y enojo. Ahora que este poder extranjero la está consumiendo, y el mundo está amenazado, los X-Men tienen que enfrentar una verdad importante: deben salvar al mundo o a su amigo que lo amenaza.',
      img: 'assets/xmf.jpg',
      tirilla: 'assets/dvd.png',
      fecha: '2018-06-07',
      trailer: '1-q8C_c-nlM',
      drive: '1fAgYtObY_5sTzUQ5r6U1iacmVEoIkqcn/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 33,
      titulo: 'Angry birds 2',
      short: 'Angry birds 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después de salvar a Bird Island de una invasión total de cerdo verde en Angry Birds: La película (2016), el héroe local siempre irritable de la isla, Red, todavía se encuentra luchando con Pig Island. A medida que la guerra de broma entre cerdos y pájaros se desata, los enormes proyectiles helados que provienen de la isla de águila cubierta de hielo del tirano Zeta amenazan la seguridad de ambos paraísos, a menos que Red y el Rey Leonard acuerden formar una tregua difícil pero honesta. Ahora, Red, Bomb, Mighty Eagle, Chuck y su brillante hermana, Silver, tienen que unir fuerzas con el poderoso equipo porcino de Leonard para frustrar los audaces esquemas del megalómano Zeta para dominar el mundo. Sin embargo, ¿es rojo capaz de cambiar?',
      img: 'assets/ab2.jpg',
      tirilla: 'assets/dvd.png',
      fecha: '2018-07-23',
      trailer: 'RDj8Y2K0ODA',
      drive: '1yWxngJGh0OSgyWu0YwDAPcug-iRVQE8s/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 34,
      titulo: 'Spiderman far home',
      short: 'Spider-Man: Lejos de casa',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Nuestro amigable vecindario Superhéroe decide unirse a sus mejores amigos Ned, MJ y el resto de la pandilla en unas vacaciones europeas. Sin embargo, el plan de Peter de dejar atrás a los súper heroicos durante algunas semanas se descarta rápidamente cuando acepta a regañadientes ayudar a Nick Fury a descubrir el misterio de varios ataques de criaturas elementales, creando estragos en todo el continente. ',
      img: 'assets/spfh.jpg',
      tirilla: 'assets/dvd.png',
      fecha: '2018-07-23',
      trailer: 'DYYtuKyMtY8',
      drive: '1RXSnobZTvAyRHGBZ2WFUIFBAvYNvRuJ8/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 35,
      titulo: 'it capítulo 2',
      short: 'it capítulo 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Derrotado por miembros del Club de Perdedores, el malvado payaso Pennywise regresa 27 años después para aterrorizar a la ciudad de Derry, Maine, una vez más. Ahora adultos, los amigos de la infancia hace mucho tiempo que se separaron. Pero cuando la gente comienza a desaparecer, Mike Hanlon llama a los demás a casa para una última posición. Dañados por las cicatrices del pasado, los perdedores unidos deben conquistar sus miedos más profundos para destruir el Pennywise que cambia de forma, ahora más poderoso que nunca.',
      img: 'assets/it2.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-09-06',
      trailer: 'xhJ5P7Up3jA',
      drive: '1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 36,
      titulo: 'Searching',
      short: 'Searching',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Después de la desaparición de la hija de 16 años de David Kim (John Cho), se abre una investigación local y se asigna un detective al caso. Pero 37 horas después y sin una sola pista, David decide buscar en el único lugar que nadie ha buscado todavía, donde se guardan todos los secretos hoy: la computadora portátil de su hija. En un thriller hipermoderno contado a través de los dispositivos tecnológicos que usamos todos los días para comunicarnos, David debe rastrear las huellas digitales de su hija antes de que ella desaparezca para siempre.',
      img: 'assets/sear.jpg',
      tirilla: 'assets/dvd.png',
      fecha: '2019-08-31',
      trailer: '3Ro9ebQxEOY',
      drive: '1DxeWws8htuTWWvxjK6ivAJZBYtr9BoTe/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 37,
      titulo: 'Hollywood',
      short: 'Érase una vez ... en Hollywood',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Érase una vez de Quentin Tarantino ... en Hollywood visita Los Ángeles en 1969, donde todo está cambiando, mientras la estrella de televisión Rick Dalton (Leonardo DiCaprio) y su doble de riesgo Cliff Booth (Brad Pitt) se abren camino en una industria que apenas reconocen nunca más. La novena película del escritor y director presenta un gran elenco y múltiples historias en homenaje a los últimos momentos de la edad de oro de Hollywood.',
      img: 'assets/holl.jpg',
      tirilla: 'assets/dvd.png',
      fecha: '2019-07-26',
      trailer: '0EtDJEbHdoM',
      drive: '1uwfqidlhzmsKhQ6vU-POcGhwVn3zPeof/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 38,
      titulo: 'Joker',
      short: 'joker',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Joker se centra en el origen del icónico archienemigo y es una historia original e independiente que no se había visto antes en la pantalla grande. La exploración de Todd Phillips de Arthur Fleck (Joaquin Phoenix), un hombre ignorado por la sociedad, no es solo un estudio de carácter valiente, sino también una historia de advertencia más amplia.',
      img: 'assets/jok.jpg',
      tirilla: 'assets/dvd.png',
      fecha: '2019-10-04',
      trailer: 'zAGVQLHvwOY',
      drive: '1XLpJoVTUDTPkT42ol6U3wNcjsSjqJ7yR/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 39,
      titulo: 'american ultra',
      short: 'american ultra',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El drogadicto de un pequeño pueblo Mike Howell ( Jesse Eisenberg ) pasa la mayor parte de su tiempo drogándose y escribiendo una novela gráfica sobre un mono superhéroe. Lo que Mike no sabe es que fue entrenado por la CIA para ser una máquina de matar letal. Cuando la agencia lo apunta a la terminación, su antiguo controlador activa sus habilidades latentes, convirtiendo al holgazán de modales suaves en un arma mortal. Ahora, el completamente sorprendido Mike debe usar sus nuevas habilidades para salvarse a sí mismo y a su novia de ser desperdiciados por los sujetos de prueba fallidos que la CIA envía después de él.',
      img: 'assets/au.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2015-07-21',
      trailer: 'icpHc_DetxI',
      drive: '1kMGZwp2-uWMloU5bNXgnsDlpvmIUvHN_/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 40,
      titulo: 'jefa por accidente',
      short: 'jefa por accidente',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Una gran trabajadora de una tienda de cajas reinventa su vida y su historia de vida y le muestra a Madison Avenue lo que la inteligencia de la calle puede hacer.',
      img: 'assets/jpa.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2018-12-21',
      trailer: 'VoNNj-eC-KA',
      drive: '1IH6Qh0Gpnzr_w6yUMs2SpLilw3xloMym/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 41,
      titulo: 'justiciero 2',
      short: 'justiciero 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El director Antoine Fuqua se reúne con Denzel Washington en esta secuela de The Equalizer de 2014. Washington retoma su papel de Robert McCall: un agente retirado de la CIA Black Ops que ahora trabaja como conductor de Lyft y vigila a la luz de la luna. Cuando su amiga Susan Plummer (Melissa Leo) es asesinada, se embarca en una incesante búsqueda de venganza por el mundo.',
      img: 'assets/ju2.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2018-07-20',
      trailer: 'Q-HiBI_cAT8',
      drive: '14wr4pYb6VTDSMmMP1RY2rBtwLk_H5est/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 42,
      titulo: 'Pet Sematary',
      short: 'Pet Sematary',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Louis Creed, su esposa Rachel, y sus dos hijos, Gage y Ellie, mover a una casa rural donde son recibidos e iluminados por el misterioso Pet Sematary, ubicado cerca. Después de la tragedia de su gato está muerto por un camión, Louis recurre a enterrarlo en el misterioso cementerio de mascotas, lo que definitivamente no es lo que parece, ya que demuestra a los Símbolos que, a veces, es mejor muertos.',
      img: 'assets/ps.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-04-05',
      trailer: '',
      drive: '1Ete_hBwyBkyNNX5tduZ83eJFq_tYAeyB/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 43,
      titulo: 'nace una estrella',
      short: 'nace una estrella',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El experimentado músico Jackson Maine (Bradley Cooper) descubre y se enamora de Ally (Gaga). Ella casi ha renunciado a su sueño de triunfar como cantante, hasta que Jack la convence. Pero incluso cuando la carrera de Ally despega, el lado personal de su relación se está desmoronando, mientras Jack lucha en una batalla en curso con sus propios demonios internos.',
      img: 'assets/nue.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2018-10-05',
      trailer: 'RCSf90JrROk',
      drive: '1co3DW_iILnH4ycxaIUgRiHe9Ybp39QxB/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 44,
      titulo: 'regreso a casa',
      short: 'regreso a casa',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Como cachorro, Bella encuentra el camino hacia los brazos de Lucas, un joven que le da un buen hogar. Cuando Bella se separa de Lucas, pronto se encuentra en un viaje épico de 400 millas para reunirse con su amado dueño. En el camino, el perro perdido pero enérgico se encuentra con una serie de nuevos amigos y logra brindar un poco de consuelo y alegría a sus vidas.',
      img: 'assets/rac.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-01-11',
      trailer: 'Fo4POwticIk',
      drive: '1rpOBYSexGY9xWKRMMqi_REap07ow3JIs/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 45,
      titulo: 'klaus',
      short: 'klaus',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Cuando Jesper (Jason Schwartzman) se distingue como el peor estudiante de la academia postal, se encuentra estacionado en una isla congelada sobre el Círculo Polar Ártico, donde los lugareños apenas intercambian palabras y mucho menos letras. Jesper está a punto de darse por vencido cuando encuentra un aliado en el maestro local Alva (Rashida Jones) y descubre a Klaus (ganador del Oscar® JK Simmons), un misterioso carpintero que vive solo en una cabaña llena de juguetes hechos a mano. Estas improbables amistades devuelven la risa a Smeerensburg, forjando un nuevo legado de vecinos generosos, tradiciones mágicas y medias colgadas de la chimenea con cuidado. Una comedia animada de Navidad dirigida por el cocreador de Despicable Me Sergio Pablos, los coprotagonistas de KLAUS Rashida Jones, Jason Schwartzman y JK Simmons.',
      img: 'assets/kla.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-11-15',
      trailer: 'taE3PwurhYM',
      drive: '1CgZjWDdKVWRRpNzUzUNNsrGZ8d31lc-p/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 46,
      titulo: 'Can You Keep a Secret?',
      short: 'me puedes guardar un secreto?',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Pensando que están a punto de estrellarse, Emma le cuenta sus secretos a un extraño en un avión. Al menos, pensó que era un extraño ... Hasta que más tarde conoce a Jack, el joven CEO de su compañía, que ahora conoce cada detalle humillante sobre ella. Basado en el éxito de ventas más vendido de NYT.',
      img: 'assets/mpg.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-07-16',
      trailer: 'wEYh5-L20hU',
      drive: '1HwVpyfxupNeadDKfk-FtP_dvKEczcOF9/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 47,
      titulo: 'Rambo: Última Sangre',
      short: 'Rambo: Última Sangre',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Casi cuatro décadas después de que extrajeron la primera sangre, Sylvester Stallone regresa como uno de los héroes de acción más grandes de todos los tiempos, John Rambo. Ahora, Rambo debe enfrentar su pasado y descubrir sus despiadadas habilidades de combate para vengarse en una misión final. Un viaje mortal de venganza, RAMBO: LAST BLOOD marca el último capítulo de la legendaria serie.',
      img: 'assets/r5.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-09-20',
      trailer: '4vWg5yJuWfs',
      drive: '1xs5aCiaRPD75V5v7sUXNTdq9qwNe7XXM/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 48,
      titulo: 'Code 8',
      short: 'Code 8',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En un mundo donde las personas con habilidades "especiales" viven en la pobreza, Conner Reed (Robbie Amell) es un joven poderoso que lucha por pagar el tratamiento médico de su madre enferma. Para ganar dinero, se une a un mundo criminal lucrativo dirigido por Garrett (Stephen Amell), que trabaja para un narcotraficante (Greg Bryk).',
      img: 'assets/cod.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-12-13',
      trailer: 'PrX1JJ5dduA',
      drive: '1iLyuexciV1fU-qTDJbsyfC04_dL6vec5/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 49,
      titulo: 'Spider-Man Multiverso',
      short: 'Spider-Man: Into the Spider-Verse',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Miles Morales es un adolescente de Nueva York que lucha con la escuela, los amigos y, además, es el nuevo Spider-Man. Cuando se encuentra con Peter Parker, el antiguo salvador de Nueva York, en el multiverso, Miles debe entrenarse para convertirse en el nuevo protector de su ciudad.',
      img: 'assets/spm.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2018-12-14',
      trailer: 'V4y82Fc7PeY',
      drive: '14HPUxVN6OLEhrALk41iGAJ-YtzoA-0qW/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 50,
      titulo: '6 Underground',
      short: '6 Underground',
      // tslint:disable-next-line:max-line-length
      sinopsis: '¿Cuál es la mejor parte de estar muerto? No se trata de escapar de tu jefe, de tu ex, ni de borrar tu historial criminal. La mejor parte de estar muerto es la libertad. La libertad de luchar contra la injusticia y el mal que acechan en nuestro mundo sin que nadie ni nada te frene o te diga "no". Esta película presenta un nuevo tipo de héroe de acción, seis individuos no identificados de todo el mundo, cada uno de los cuales es el mejor en lo que hacen, han sido elegidos no solo por su habilidad, sino por un deseo único de eliminar su pasado para cambiar el futuro. . El equipo está reunido por un líder enigmático llamado One (Ryan Reynolds), cuya única misión en la vida es garantizar que, mientras él y sus compañeros operativos nunca serán recordados, sus acciones sean absolutamente seguras.',
      img: 'assets/6u.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-12-13',
      trailer: 'aVfxMcGrKm4',
      drive: '1WjoQbGakckYkfhmeWUAHSDrKUsQtobQO/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 51,
      titulo: 'alita',
      short: 'alita',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Alita es una creación de una época de desesperación. Encontrada por el misterioso Dr. Ido mientras buscaba partes de cyborg, Alita se convierte en un ser letal y peligroso. No puede recordar quién es o de dónde vino. Pero para el Dr. Ido, la verdad es muy clara. Ella es la única persona que puede romper el ciclo de muerte y destrucción que dejó Tiphares. Pero para lograr su verdadero propósito, debe luchar y matar. Y ahí es donde entra en juego el verdadero significado de Alita. Ella es un ángel del cielo. Ella es un ángel de la muerte.',
      img: 'assets/ali.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-02-14',
      trailer: 'HZpDuRzr_Xk',
      drive: '1TjJOSzvJTxufsg1PHMi5sNuCLIqprC9a/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 52,
      titulo: 'POMS',
      short: 'POMS',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'POMS es una comedia sobre un grupo de mujeres que forman un escuadrón de animadores en su comunidad de jubilados, lo que demuestra que nunca eres demasiado viejo para traerlo.',
      img: 'assets/poms.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-04-10',
      trailer: '-9PypHxfY_M',
      drive: '1jd6yQdHBTjTHtvata7XEUxhfDaZ1Tym6/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 53,
      titulo: 'Star Wars IX',
      short: 'Star Wars: Episode IX - The Rise of Skywalker',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'La Resistencia sobreviviente se enfrenta a la Primera Orden una vez más en el capítulo final de la saga Skywalker.',
      img: 'assets/sw9.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-12-20',
      trailer: '8Qn_spdM5Zg',
      drive: '1-CnsFHh9HqGYlzKZESDp0oGHkYV_BSJc/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 54,
      titulo: 'Maléfica: la amante del mal',
      short: 'Maléfica: la amante del mal',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Han pasado cinco años pacíficos desde la desaparición del monarca duplicito, el Rey Stefan, en Maléfica (2014), y, ahora, un evento imprevisto pero alegre está a punto de unir el reino mortal de Ulstead y el reino de las hadas de los moros encantados. Sin embargo, una vez más, la traición odiosa se interpone en el camino del verdadero amor joven, ya que la envidia maliciosa, la ambición ilimitada y los pensamientos ignorables se arrastran en los corazones de los hombres. Ahora, dos mundos vecinos se encuentran divididos por el miedo y los prejuicios, y, lamentablemente, la unión inminente allana el camino para una confrontación total. De repente, el magnífico sprite alado, Maléfica, y la encantadora princesa Aurora se ven atrapados en el medio. ¿El amor siempre termina bien?',
      img: 'assets/m2.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-10-18',
      trailer: 'dd4l6veFRDw',
      drive: '1BSglBEiW07laMEnsoECRNJ0zG6tKRFhH/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 55,
      titulo: 'Zombieland 2',
      short: 'Zombieland: Double Tap',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Una larga década después de los eventos post-apocalípticos en Zombieland (2009), el cuarteto resistente de supervivientes: el exterminador de zombis duro como las uñas, Tallahassee; su compañero de regla, Colón; La cazadora de espíritu libre, Wichita, y su hermana menor, Little Rock, se encuentran en el seno de una Casa Blanca ahora abandonada. Sin embargo, en un mundo rabioso aún invadido por multitudes de muertos vivientes y cepas mutadas de cadáveres animados evolucionados, una separación premeditada enviará al equipo de vuelta al punto de partida, buscando, una vez más, la tierra prometida. Ahora, toda esperanza descansa en Babilonia: una comuna totalmente orgánica de pacíficos vegetarianos felices que adoran las fiestas. ¿Es este el final del camino? ',
      img: 'assets/zl2.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-10-18',
      trailer: 'ZlW9yhUKlkQ',
      drive: '1Cp8BCpioMbjKppvSE234DsPjDOTov2ly/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 56,
      titulo: 'Cuenta regresiva',
      short: 'Cuenta regresiva',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En una fiesta de adolescentes, un grupo de amigos descarga la aplicación Countdown que predice cuándo morirá el usuario. La adolescente Courtney ve que solo le quedan un par de horas de vida y no acepta el viaje de su novio borracho Evan. Ella camina a su casa, pero una criatura sobrenatural la mata cuando el temporizador de su teléfono celular llega a cero. Mientras tanto, Evan choca su auto al mismo tiempo de su muerte y va a un hospital donde trabaja la enfermera Quinn Harris. Evan revela que tiene miedo de someterse a una cirugía ya que la aplicación Countdown predice que morirá al mismo tiempo de la cirugía. Los médicos y enfermeras del hospital deciden descargar la aplicación y Quinn se entera de que solo tiene tres días de vida. Cuando Evan misterioso muere en un accidente en el hospital, Quinn compra un nuevo teléfono celular y descubre que la aplicación también está instalada.',
      img: 'assets/cr.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-10-25',
      trailer: 'rcJCuWS_gd0',
      drive: '1ve_nUHY9_pXD6At2kZ_PY9yq72sbh6tC/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 57,
      titulo: 'Abigail',
      short: 'Abigail',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Una joven Abigail vive en una ciudad cuyas fronteras se cerraron hace muchos años debido a una epidemia de una misteriosa enfermedad. El padre de Abby era uno de los enfermos, y lo llevaron cuando ella tenía seis años. Al ir en contra de las autoridades para encontrar a su padre, Abby se entera de que su ciudad está llena de magia. Y ella descubre en sí misma habilidades mágicas extraordinarias.',
      img: 'assets/abi.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2020-01-30',
      trailer: 'BblRdE06lic',
      drive: '17u_zgiOL9J1gQ6s6Cx85Dmhwc63WPKdc/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 58,
      titulo: 'Lamp Life',
      short: 'Lamp Life',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Corto que muestra lo que le pasó a Bo Peep y sus ovejas entre Toy Story 2 y cuando reaparece en Toy Story 4.',
      img: 'assets/ll.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2020-01-31',
      trailer: 'S4NBWqFS3io',
      drive: '1QB6Q-lLFSdAG1_GMYrViYIh7j7CAdE0p/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 59,
      titulo: 'jugando con fuego',
      short: 'jugando con fuego',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Un equipo de bomberos robustos se encuentra con su pareja cuando intenta rescatar a tres niños revoltosos.',
      img: 'assets/jcf.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-11-08',
      trailer: 'bYc1NSJyuZE',
      drive: '1JKW26zDAVayP6p0MAxq-NXjawXmJsQgO/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 60,
      titulo: 'parasite',
      short: 'parasite',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Los Kim, madre y padre Chung-sook y Ki-taek, y sus hijos adultos jóvenes, su hijo Ki-woo y su hija Ki-jung, son una familia pobre que vive en un apartamento medio sótano en mal estado y estrecho en un concurrido comercial de clase baja. Distrito de Seúl. Sin siquiera saberlo, ellos, especialmente el Sr. y la Sra. Kim, literalmente huelen a pobreza. A menudo, como colectivo, perpetran estafas menores para subsistir, e incluso cuando tienen trabajos, realizan el trabajo mínimo requerido. Ki-woo es quien sueña con salir de la pobreza un día yendo a la universidad. A pesar de no tener esa educación universitaria, Ki-woo es elegido por su amigo estudiante universitario Min, quien se va a la escuela para hacerse cargo de su trabajo de tutoría en Park Da-hye, con quien Min planea salir una vez que regrese a Seúl y ella misma está en la universidad. Los parques son una familia acomodada que durante cuatro años ha vivido en su casa modernista diseñada por y la antigua residencia del famoso arquitecto Namsoong. Mientras que el Sr. y la Sra. Park .',
      img: 'assets/par.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-11-08',
      trailer: '5xH0HfJHsaY',
      drive: '1hgvBqZpeuUKOGJ3gLFiVtf-6ad-KV-R6/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 61,
      titulo: 'Ford v Ferrari',
      short: 'Ford v Ferrari',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El diseñador de automóviles estadounidense Carroll Shelby y el conductor Ken Miles luchan contra la interferencia corporativa, las leyes de la física y sus propios demonios personales para construir un revolucionario auto de carreras para Ford y desafiar a Ferrari en las 24 Horas de Le Mans en 1966.',
      img: 'assets/foryfer.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-11-15',
      trailer: 'zyYgDtY2AMY',
      drive: '1QO8qSHMKBBk1YFh5tRN4WZl7Fe8GVU2h/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 62,
      titulo: 'Terminator: Dark Fate',
      short: 'Terminator: Dark Fate',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'La trabajadora mexicana Dani Ramos es perseguida por el terminador indestructible del futuro REV-9 que mata a su padre y hermano y está protegido por el soldado mejorado también de la futura Grace. Huyen del terminador imparable y de la nada Sarah Connor los ayuda en el camino. Se dirigen a Laredo, Texas, donde Grace tiene las coordenadas de un posible apoyo y se encuentran con el T-800 que mató a John Connor y vive en un lugar aislado con su familia compuesta por una esposa y un hijo durante mucho tiempo. El grupo se une para tratar de destruir el REV-9.',
      img: 'assets/tdd.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-11-01',
      trailer: 'jCyEX6u-Yhs',
      drive: '1WAQiBYb-3HA0HuxYWiwrqsL67aSvWeJb/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 63,
      titulo: 'docotor sueño',
      short: 'docotor sueño',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'La trabajadora mexicana Dani Ramos es perseguida por el terminador indestructible del futuro REV-9 que mata a su padre y hermano y está protegido por el soldado mejorado también de la futura Grace. Huyen del terminador imparable y de la nada Sarah Connor los ayuda en el camino. Se dirigen a Laredo, Texas, donde Grace tiene las coordenadas de un posible apoyo y se encuentran con el T-800 que mató a John Connor y vive en un lugar aislado con su familia compuesta por una esposa y un hijo durante mucho tiempo. El grupo se une para tratar de destruir el REV-9.',
      img: 'assets/ds.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-11-08',
      trailer: 'ohBLtn5FI0E',
      drive: '1TZk6NAuCUUUdjhjeqxlq9RbQ8duCBjk_/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 64,
      titulo: 'Jojo Rabbit',
      short: 'Jojo Rabbit',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Una sátira de la Segunda Guerra Mundial que sigue a un niño alemán solitario llamado Jojo (Roman Griffin Davis) cuya visión del mundo se da vuelta cuando descubre que su madre soltera (Scarlett Johansson) está escondiendo a una joven judía (Thomasin McKenzie) en su ático. Ayudado solo por su idiota amigo imaginario, Adolf Hitler (Taika Waititi), Jojo debe enfrentar su nacionalismo ciego.',
      img: 'assets/jojo.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-11-08',
      trailer: 'XW1syXGnNBE',
      drive: '19JAEqKwrbHU78cAiMbLetcK5L7WemV_1/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 65,
      titulo: 'Proyecto Géminis',
      short: 'Proyecto Géminis',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Un asesino en retiro, Henry Brogan, se encuentra perseguido por un misterioso asesino que puede predecir cada uno de sus movimientos. Al descubrir que está siendo cazado por un clon más joven de sí mismo, Henry necesita descubrir por qué está siendo atacado y quién es el creador.',
      img: 'assets/pg.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-10-11',
      trailer: 'AbyJignbSj0',
      drive: '1B3wI28j-IgOHW68uN88A87No8TQ_kExL/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 66,
      titulo: 'Nueva York Sin Salida',
      short: 'Nueva York Sin Salida',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Empujado a una persecución en toda la ciudad por un dúo de asesinos de policías, el detective de la policía de Nueva York, Andre Davis, comienza a descubrir una conspiración masiva que vincula a sus compañeros policías con un imperio criminal y debe decidir quién está cazando y quién lo está cazando. Durante la cacería humana, Manhattan está completamente cerrada por primera vez en su historia, sin salida ni entrada a la isla, incluidos los 21 puentes.',
      img: 'assets/nyss.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-11-22',
      trailer: 'BVZDhunTrYA',
      drive: '1l_KvQaQ7hBgz1IpVMcqHCEvZxzh3WZOY/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 67,
      titulo: 'Frozen 2',
      short: 'Frozen 2',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Habiendo aprovechado su poder cada vez mayor después de levantar la terrible maldición del eterno invierno en Frozen(2013), la bella conjuradora de nieve y hielo, la reina Elsa, ahora gobierna el pacífico reino de Arendelle, disfrutando de una vida feliz con su hermana, la princesa Anna. Sin embargo, una voz melodiosa que solo Elsa puede oír la mantiene despierta, invitándola al bosque encantado místico que el padre de las hermanas les dijo hace mucho tiempo. Ahora, incapaz de bloquear la llamada emocionante de la sirena secreta, Elsa, junto con Anna, Kristoff, Olaf y Sven, reúne el coraje para seguir la voz hacia lo desconocido, con la intención de encontrar respuestas en el reino perpetuamente brumoso en el bosque Cada vez más, un desequilibrio inexplicable está dañando no solo su reino sino también a la tribu vecina de Northuldra. ¿Puede la Reina Elsa aprovechar sus legendarias habilidades mágicas para restaurar la paz y la estabilidad?',
      img: 'assets/f2.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-11-22',
      trailer: '2HVZuCpb7H4',
      drive: '1qXHO-8l8I4fPCUZG1d7UhJZKnpT7Wojn/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 68,
      titulo: 'Los ángeles de Charlie',
      short: 'Los ángeles de Charlie',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Sabina Wilson (Kristen Stewart), Elena Houghlin (Naomi Scott) y Jane Kano (Ella Balinska) están trabajando para el misterioso Charles Townsend (Robert Clotworthy), cuya agencia de seguridad e investigación se ha expandido internacionalmente. Con las mujeres más inteligentes, valientes y altamente capacitadas del mundo en todo el mundo, ahora hay equipos de Ángeles guiados por múltiples Bosley que asumen los trabajos más difíciles en todas partes.',
      img: 'assets/adc.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-11-15',
      trailer: 'rfg-IgD6-i4',
      drive: '198aUZgHPfyN0rpViRVq_OaqAoWYqCuqw/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 69,
      titulo: 'Jumanji 3',
      short: 'Jumanji: el siguiente nivel',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'La pandilla ha vuelto pero el juego ha cambiado. Cuando regresan a Jumanji para rescatar a uno de los suyos, descubren que nada es lo que esperan. Los jugadores tendrán que enfrentarse a partes desconocidas e inexploradas, desde los desiertos áridos hasta las montañas nevadas, para escapar del juego más peligroso del mundo.',
      img: 'assets/jnl.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-12-13',
      trailer: 'RmxdA-Cr854',
      drive: '1eO23FeEbc0Mp5l7AqmFE8kgzvAIthKSS/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 70,
      titulo: 'Embarazada',
      short: 'Doblemente Embarazada',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Un mes antes de casarse con Javier, Cristina decide celebrar su despedida de soltera. Es entonces cuando conoce a Felipe, su ex de la secundaria, con quien termina pasando la noche. Cuando Cristina descubre que está embarazada, la emoción y el caos se desatan, descubriendo que Cristina está esperando gemelos, uno de su prometido y uno de su ex novio.',
      img: 'assets/de.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-12-20',
      trailer: 'LaIkWymmf8k',
      drive: '1H3InG0EigHiCENchs5tj4M8Anf6tv5AD/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 71,
      titulo: 'Cafarnaúm',
      short: 'Cafarnaúm-La ciudad olvidada',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Capernaüm ("Caos") cuenta la historia de Zain (Zain al-Rafeea), un niño libanés que demanda a sus padres por el "crimen" de darle vida. La película sigue a Zain mientras viaja de un niño valiente y callejero a un "adulto" endurecido de 12 años que huye de sus padres negligentes y sobrevive a través de su ingenio en las calles, donde conoce al trabajador migrante etíope Rahil, quien le proporciona refugio y comida. , como Zain cuida a su hijo Yonas a cambio. Más tarde, Zain es encarcelado por cometer un crimen violento, y finalmente busca justicia en una sala del tribunal.',
      img: 'assets/clcp.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-02-14',
      trailer: 'iC1QsklQhb8',
      drive: '1cUF3kXmynwedT7lfmWDdXBbd_ervIjh9/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 72,
      titulo: 'Espías a escondidad',
      short: 'Espías a escondidas',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'El súper espía Lance Sterling y el científico Walter Beckett son opuestos casi exactos. Lance es suave, suave y elegante. Walter no lo es. Pero lo que Walter carece de habilidades sociales lo compensa en inteligencia e invención, creando los asombrosos artilugios que usa Lance en sus misiones épicas. Pero cuando los eventos toman un giro inesperado, Walter y Lance de repente tienen que confiar el uno en el otro de una manera completamente nueva. Y si esta extraña pareja no puede aprender a trabajar en equipo, todo el mundo está en peligro.',
      img: 'assets/sd.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-12-25',
      trailer: '5c358FRhX5k',
      drive: '1NJZTI-sVxV70zjxzKABmdv-isux1rycm/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 73,
      titulo: 'mujercitas',
      short: 'mujercitas',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'En los años posteriores a la Guerra Civil, Jo March vive en Nueva York y se gana la vida como escritora, mientras su hermana Amy estudia pintura en París. Amy tiene un encuentro casual con Theodore, un enamoramiento de la infancia que le propuso matrimonio a Jo pero que finalmente fue rechazado. Su hermana mayor, Meg, está casada con un maestro de escuela, mientras que la hermana tímida Beth desarrolla una enfermedad devastadora que vuelve a unir a la familia.',
      img: 'assets/lw.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2019-12-25',
      trailer: '-AN01Vnmt3U',
      drive: '1yUw5PmWYgJ8KZAywNGAvZXBIaX52zBJB/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
    {
      idx : 74,
      titulo: '1917',
      short: '1917',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Abril de 1917, el frente occidental. Dos soldados británicos son enviados a entregar un mensaje urgente a un regimiento aislado. Si el mensaje no se recibe a tiempo, el regimiento entrará en una trampa y será masacrado. Para llegar al regimiento deberán cruzar el territorio enemigo. El tiempo es esencial y el viaje estará lleno de peligros.',
      img: 'assets/1917.jpg',
      tirilla: 'assets/hd.png',
      fecha: '2020-02-10',
      trailer: 'YrbdN5zaouU',
      drive: '1tYF0uNxXiSwkQLe1SJi5Yw7XvhnXuIMs/preview',
      // tslint:disable-next-line:max-line-length
      tvshow: 'https://r4---sn-cvb7ln7e.c.drive.google.com/videoplayback?expire=1575338138&ei=WojlXc-uA8rm-QW_nougCg&ip=167.249.43.48&cp=QVNMV0RfV1FRSVhOOmlHWjg2aEFLUTY0U3ZVdXVkcmtZOHBlZFdCV01zUmJ2c3hqWTdWWlhfd2o&id=6e44e17a7b85bc39&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-cvb7ln7e&ms=nxu&mv=u&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1DlC1xYTAFHmaTxQa6g49IzB21EEYLhBB&app=explorer&mime=video/mp4&dur=10161.702&lmt=1574197768812112&mt=1575322820&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRgIhAJWYEk2UJu7vu7hjhKs4mygo3VcTkXhwhovoi3WVjTYMAiEAxQewsMk6hv7XDKbVwUBS0uM0cUJmRc4M1deyzWbWILM=&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfAw0o9C4WrhTdulNxjW4ziDuBTSjpIISScC29BInP5ECIQDUMtB9-LtmAfG0tuHJEXrr9uf3PUvoSHVovvG0lPwhaQ==&cpn=d-8LWxQbU3lIy4tV&c=WEB_EMBEDDED_PLAYER&cver=20191128'
    },
  ];
  getPeliculas(): Peliculas[] {
    return this.peliculas;
  }

  getPelicula( idx: string ) {
    return this.peliculas[idx];
  }
  buscarPeliculas( termino: string ): Peliculas[] {

    const peliculaArr: Peliculas[] = [];
    termino = termino.toLowerCase();

    for ( const pelicula of this.peliculas ) {

      const titulo = pelicula.short.toLowerCase();

      if ( titulo.indexOf( termino ) >= 0  ) {
        peliculaArr.push( pelicula );
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
  tirilla: string;
  fecha: string;
  trailer: string;
  drive: string;
  tvshow: string;
}
