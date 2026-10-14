// ВСЁ, ЧТО НУЖНО РЕДАКТИРОВАТЬ — ЗДЕСЬ: тексты, имена, фото.
const p = (f) => `${import.meta.env.BASE_URL}${f}`;
const list = (files) => files.map(p);

export const HERO_PHOTO = p("alone.jpg"); // главное фото в начале
export const SIDE_PHOTO = p("3youngson.jpg"); // фото рядом с письмом

export const LETTER = [
  "Мамочка, родная наша!",
  "Сегодня твой день, и нам хочется сказать вслух то, что мы так часто храним в сердце.",
  "Нас у тебя трое — три брата, три характера, три непоседы, которые целыми днями не давали тебе покоя. И каждого из нас ты любила одинаково: безгранично, терпеливо, без условий.",
  "Мы выросли благодаря тебе. Твоим бессонным ночам, твоему терпению, твоим тёплым рукам и твоим молитвам. Каждый наш шаг и каждая наша победа — это твоя заслуга.",
  "Всё лучшее, что есть в нас, — от тебя. Мы гордимся тем, что нас вырастила именно ты. Мы гордимся тем, что ты — наша мама.",
  "С днём рождения, любимая! Мы очень тебя любим.",
];

export const YOUNG = list([
  "youngmother.jpg",
  "youngmother1.jpg",
  "youngmother3.jpg",
  "youngmother4.jpg",
  "youngmother8.jpg",
  "youngmother11.jpg",
  "younfmother10.jpg",
]);

// Замени имена и тексты на свои. Фото — подбери нужные файлы.
export const BROTHERS = [
  {
    name: "Старший сын",
    photo: p("sonelder.jpg"),
    text: "Мама, ты была моей первой опорой и остаёшься ею до сих пор. Всему, что я умею и кем стал, я научился у тебя.",
  },
  {
    name: "Средний сын",
    photo: p("with1son.jpg"),
    text: "Спасибо, что всегда верила в меня, даже когда я сам сомневался. Твоя вера дала мне силы идти вперёд.",
  },
  {
    name: "Младший сын",
    photo: p("with2son.jpg"),
    text: "Мамочка, рядом с тобой я всегда чувствую себя ребёнком — защищённым и любимым. Я так горжусь тобой.",
  },
];

export const THANKS = [
  "За бессонные ночи у наших кроваток",
  "За то, что верила в нас, когда мы сами в себя не верили",
  "За тёплые руки и самый уютный дом на свете",
  "За мудрые слова, которые мы понимаем только сейчас",
  "За терпение к трём шумным мальчишкам",
  "За то, что ты всегда ждёшь нас дома",
  "За твою улыбку, которая лечит всё",
];

export const WISHES = [
  "Крепкого-крепкого здоровья",
  "Светлых и спокойных дней",
  "Долгих лет рядом с нами",
  "Мира и радости в душе",
  "Чтобы мы почаще радовали тебя",
  "Любви, которая возвращается к тебе сторицей",
];

export const FILTERS = [
  { id: "all", label: "Все" },
  { id: "young", label: "Молодость" },
  { id: "alone", label: "Ты" },
  { id: "sons", label: "С сыновьями" },
  { id: "family", label: "Семья" },
  { id: "funny", label: "Улыбки" },
  { id: "friends", label: "С друзьями" },
];

const cat = (id, files) => files.map((f) => ({ src: p(f), cat: id }));

export const GALLERY = [
  ...cat("young", [
    "youngmother.jpg",
    "youngmother1.jpg",
    "youngmother3.jpg",
    "youngmother4.jpg",
    "youngmother8.jpg",
    "youngmother11.jpg",
    "younfmother10.jpg",
  ]),
  ...cat("alone", [
    "alone.jpg",
    "alone2.jpg",
    "alone3.jpg",
    "alone4.jpg",
    "alone5.jpg",
    "alone10.jpg",
    "alone12.jpg",
    "alone20.jpg",
    "alone21.jpg",
    "alone100.jpg",
  ]),
  ...cat("sons", [
    "with1son.jpg",
    "with1son2.jpg",
    "with1son4.jpg",
    "with1son5.jpg",
    "with1son10.jpg",
    "with1son11.jpg",
    "with1son12.jpg",
    "with1son13.jpg",
    "with2son.jpg",
    "with2son2.jpg",
    "with2son4.jpg",
    "with2son10.jpg",
    "with2son11.jpg",
    "with2son12.jpg",
    "with2sons3.jpg",
    "withson1.jpg",
    "withson14.jpg",
    "withson15.jpg",
    "withson16.jpg",
    "withson100.jpg",
    "withson101.jpg",
    "withson102.jpg",
    "withson103.jpg",
    "withson104.jpg",
    "withtwoson11.jpg",
    "withtwoson12.jpg",
    "withtwoson100.jpg",
  ]),
  ...cat("family", [
    "3youngson.jpg",
    "sonelder.jpg",
    "withfather.jpg",
    "withsonaandfatherofson.jpg",
    "alboum.jpg",
    "alboum2.jpg",
    "alboumphoto.jpg",
  ]),
  ...cat("funny", ["jokes.jpg", "jokes1.jpg", "jokes3.jpg"]),
  ...cat("friends", [
    "withfrientd.jpg",
    "withtwofriends.jpg",
    "withtwofriends1.jpg",
    "withtwofriends3.jpg",
  ]),
];
