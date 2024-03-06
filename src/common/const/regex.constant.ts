
export const iranianPhoneNumber = /^(\+98|0)?9\d{9}$/g;

export const englishCharacter = /^[a-zA-Z]+$/;

export const englishCharacterAndNumbers = /^$|([a-zA-Z0-9 _-]+)$/;

export const englishNumber = /^[0-9]$/;

export const accountIban = /(\b(I|i)(R|r)[0-9]{2}(?:[ -]?[0-9]{4}){5}(?!(?:[ -]?[0-9]){3})(?:[ -]?[0-9]{2})?\b)|^$/;

export const urlEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/;