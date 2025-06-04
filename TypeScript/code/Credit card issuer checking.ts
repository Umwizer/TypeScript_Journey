// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// Where Issuer is defined with the following enum type.

// enum Issuer {
//   VISA = 'VISA',
//   AMEX = 'AMEX',
//   Mastercard = 'Mastercard',
//   Discover = 'Discover',
//   Unknown = 'Unknown',
// }
// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"
//import { Issuer } from "./preloaded";

// export const getIssuer = (x: number): Issuer => {
//   const s = x.toString();
//   const len = s.length;

//   const startsWithAny = (prefixes: string[]) =>
//     prefixes.some((p) => s.startsWith(p));

//   if (s.startsWith("4") && (len === 13 || len === 16)) return Issuer.VISA;
//   if (startsWithAny(["34", "37"]) && len === 15) return Issuer.AMEX;
//   if (startsWithAny(["51", "52", "53", "54", "55"]) && len === 16)
//     return Issuer.Mastercard;
//   if (s.startsWith("6011") && len === 16) return Issuer.Discover;

//   return Issuer.Unknown;
// };
