let Movies = [
  {
    name: "The Guilty",
    number: 1,
    year: "2021",
    rating: "6.3",
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BZWI3NmEyYzAtNWY4OC00YWY4LTk2MjgtM2Y1NDdlZWE4ODgzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    description:
      "Plot. Troubled LAPD officer Joe Baylor is working the night shift at a 911 call center while he awaits a court hearing for an incident that occurred on duty eight months prior. He answers a call from a woman named Emily Lighton who reveals she has been abducted.",
    trailer: "https://youtu.be/NaB_ERMAZu4",
  },
  {
    name: "The Unforgivable",
    number: 2,
    year: "2021",
    rating: "7.2",
    imgSrc:
      "https://cps-static.rovicorp.com/2/Open/Netflix/Program/46491116/_derived_jpg_q90_310x470_m0/34_27_1640349144127_2.jpg",
    description:
      "A woman is released from prison after serving a sentence for a violent crime and re-enters a society that refuses to forgive her past. A woman is released from prison after serving a sentence for a violent crime and re-enters a society that refuses to forgive her past.",
    trailer: "https://youtu.be/JNUjx7LZoiU",
  },
  {
    name: "The Tomorrow War",
    number: 3,
    year: "2021",
    rating: "6.6",
    imgSrc:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhotZZ36j8rndD5i2OG1scehoqeH_m7uLmohqF-yDDfR8X7kFk",
    description:
      "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past. A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
    trailer: "https://youtu.be/QPistcpGB8o",
  },
];

export function getMovies() {
  return Movies;
}

export function getMovie(number) {
  return Movies.find((invoice) => invoice.number === number);
}
