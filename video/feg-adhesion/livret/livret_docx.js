// Texte de la vidéo « Comment adhérer à la FEG ? » (FEG-comment-adherer-9x16-v2) mis en page pour le livret.
// Usage : node livret/livret_docx.js livret/FEG-comment-adherer-9x16-v2-texte.docx
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, ShadingType,
  BorderStyle, AlignmentType, LevelFormat,
} = require("docx");

// typographie française : apostrophe courbe, espace insécable avant : ; ? ! et dans « »
const fr = (s) =>
  s.replace(/'/g, "’").replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");

const GREEN_DEEP = "063D21", GREEN = "0A7537", INK = "1A1C19", GREY = "5C6259", LINE = "C9CEC9", TINT = "EEF0EC";
const FONT = "Arial";

const p = (text, opts = {}) => new Paragraph({ ...opts, children: [new TextRun(fr(text))] });
const body = (text, keep = false) => new Paragraph({ style: "Body", keepNext: keep, children: [new TextRun(fr(text))] });
const kicker = (text) => new Paragraph({ style: "Kicker", children: [new TextRun(fr(text))] });
const h1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(fr(text))] });
const bullet = (runs, last = false) => new Paragraph({ style: "Body", keepNext: !last, keepLines: true, numbering: { reference: "puces", level: 0 }, children: runs });
const t = (s, o = {}) => new TextRun({ text: fr(s), ...o });
const sup = (s) => new TextRun({ text: s, superScript: true });

// tableau des cinq pièces de l'entreprise formelle
const W = 9026, C1 = 6326, C2 = 2700;
const border = { style: BorderStyle.SINGLE, size: 4, color: LINE };
const borders = { top: border, bottom: border, left: border, right: border };
const cell = (runs, w, head = false) =>
  new TableCell({
    width: { size: w, type: WidthType.DXA },
    borders,
    shading: head ? { type: ShadingType.CLEAR, color: "auto", fill: GREEN_DEEP } : undefined,
    margins: { top: 90, bottom: 90, left: 140, right: 140 },
    children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: runs })],
  });
const row = (a, b, head = false) =>
  new TableRow({
    tableHeader: head,
    children: [
      cell([t(a, head ? { bold: true, color: "FFFFFF" } : {})], C1, head),
      cell([t(b, head ? { bold: true, color: "FFFFFF" } : { bold: true, color: GREEN })], C2, head),
    ],
  });
const conditions = new Table({
  width: { size: W, type: WidthType.DXA },
  columnWidths: [C1, C2],
  rows: [
    row("Pièce", "Statut", true),
    row("RCCM · Registre du commerce", "✓ Validé"),
    row("NIF · Identifiant fiscal", "✓ Validé"),
    row("CNSS · Immatriculation, cotisations", "À jour"),
    row("CNAMGS · Immatriculation, cotisations", "À jour"),
    row("Impôts · Situation fiscale", "À jour"),
  ],
});

// encadré (paragraphes à fond teinté et filet vert à gauche)
const boxLine = (runs, last = false) =>
  new Paragraph({
    style: "Body",
    shading: { type: ShadingType.CLEAR, color: "auto", fill: TINT },
    border: { left: { style: BorderStyle.SINGLE, size: 24, color: GREEN, space: 8 } },
    indent: { left: 200, right: 200 },
    spacing: { before: 0, after: last ? 160 : 0, line: 300 },
    keepNext: !last,
    children: runs,
  });

const children = [
  new Paragraph({ heading: HeadingLevel.TITLE, children: [t("Comment adhérer à la FEG ?")] }),
  new Paragraph({ style: "Source", children: [t("Fédération des Entreprises du Gabon · texte de la vidéo « Comment adhérer à la FEG ? » (FEG-comment-adherer-9x16-v2)")] }),
  body("Vous souhaitez rejoindre la Fédération des Entreprises du Gabon ? Voici comment adhérer, étape par étape."),

  kicker("Condition impérative"),
  h1("Être une entreprise formelle"),
  body("D'abord, une condition impérative : être une entreprise formelle. Immatriculée au registre du commerce, dotée d'un numéro d'identification fiscale, et à jour de ses cotisations CNSS, CNAMGS et de ses impôts.", true),
  conditions,
  new Paragraph({ style: "Body", spacing: { before: 0, after: 0 }, children: [] }),

  kicker("Étape 1 · Le dossier"),
  h1("Remplir et signer le dossier d'adhésion"),
  body("Remplissez ensuite le dossier d'adhésion : lettre de demande, fiche entreprise, et choix de votre fédération métier. Signez la déclaration d'engagement à la charte d'éthique de la Fédération, puis apposez le cachet de l'entreprise.", true),
  bullet([t("Lettre de demande")]),
  bullet([t("Fiche entreprise")]),
  bullet([t("Fédération métier : "), t("une seule case cochée", { color: GREY })]),
  bullet([t("Déclaration d'engagement : "), t("charte d'éthique de la FEG", { color: GREY })]),
  bullet([t("Signature et cachet de l'entreprise")], true),

  kicker("Étape 2 · Les justificatifs"),
  h1("Joindre les justificatifs"),
  body("Joignez vos justificatifs CNSS et CNAMGS, ainsi que la fiche circuit.", true),
  bullet([t("Justificatif d'immatriculation à la CNSS")]),
  bullet([t("Justificatif d'immatriculation à la CNAMGS")]),
  bullet([t("Fiche circuit")], true),

  kicker("Étape 3 · Le dépôt"),
  h1("Déposer le dossier"),
  body("Puis déposez le dossier complet à la Fédération, aux huitième et neuvième étages de l'immeuble Odyssée, à Libreville.", true),
  boxLine([t("Immeuble Odyssée, 8", { bold: true }), new TextRun({ text: "e", superScript: true, bold: true }), t(" et 9", { bold: true }), new TextRun({ text: "e", superScript: true, bold: true }), t(" étages", { bold: true })]),
  boxLine([t("BP 410 · Libreville")]),
  boxLine([t("info@lafeg.ga", { color: GREEN, bold: true })], true),

  kicker("Étape 4 · La validation"),
  h1("Examen et validation"),
  body("Votre dossier est examiné et validé par les instances compétentes. Incomplet, il est accepté sous réserve : vous avez trois mois pour le compléter.", true),
  new Paragraph({ style: "Body", keepNext: true, children: [t("Décision", { bold: true })] }),
  bullet([t("Acceptée")]),
  bullet([t("Acceptée sous réserve : "), t("dossier incomplet, 3 mois pour le compléter", { color: GREY })]),
  bullet([t("Refusée")], true),

  kicker("Étape 5 · Le règlement"),
  h1("Cotisation et droit d'accès"),
  body("Une fois le dossier validé, réglez la cotisation annuelle, selon votre chiffre d'affaires, et le droit d'accès de première adhésion.", true),
  bullet([t("Une cotisation annuelle, "), t("selon votre chiffre d'affaires", { color: GREEN, bold: true })]),
  bullet([t("Droit d'accès · "), t("première adhésion", { color: GREY })], true),

  kicker("Adhésion effective"),
  h1("Bienvenue parmi les membres"),
  body("Votre adhésion est alors effective : vous prenez place dans votre fédération, aux côtés des entreprises qui font l'économie du pays."),

  kicker("Étape 6 · Chaque année"),
  h1("Mettre à jour vos données"),
  body("Et chaque année, avant le 31 mars, vous actualisez les données économiques de votre entreprise.", true),
  boxLine([t("Date limite : ", { bold: true }), t("31 mars", { bold: true, color: GREEN })], true),

  new Paragraph({ style: "Kicker", children: [] }),
  h1("Bâtir ensemble une économie forte"),
  new Paragraph({ style: "Lead", children: [t("pour garantir la "), t("souveraineté nationale", { bold: true, color: GREEN })] }),
  body("Bâtir ensemble une économie forte, pour garantir la souveraineté nationale : rejoignez la Fédération des Entreprises du Gabon."),
  boxLine([t("Devenez membre · ", { bold: true, color: GREEN_DEEP }), t("lafeg.ga", { bold: true, color: GREEN })]),
  boxLine([t("info@lafeg.ga · +241 77 55 95/97")]),
  boxLine([t("Immeuble Odyssée, 8"), sup("e"), t(" et 9"), sup("e"), t(" étages · BP 410 · Libreville")], true),
];

const doc = new Document({
  creator: "Fédération des Entreprises du Gabon",
  title: "Comment adhérer à la FEG ?",
  description: "Texte de la vidéo FEG-comment-adherer-9x16-v2, guide pour le livret",
  styles: {
    default: { document: { run: { font: FONT, size: 22, color: INK } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: FONT, size: 48, bold: true, color: GREEN_DEEP },
        paragraph: { spacing: { before: 0, after: 80 }, keepNext: true } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: FONT, size: 32, bold: true, color: GREEN_DEEP },
        paragraph: { spacing: { before: 0, after: 120 }, keepNext: true, outlineLevel: 0 } },
      { id: "Kicker", name: "Surtitre", basedOn: "Normal", next: "Heading1", quickFormat: true,
        run: { font: FONT, size: 20, bold: true, color: GREEN },
        paragraph: { spacing: { before: 400, after: 40 }, keepNext: true } },
      { id: "Body", name: "Texte du guide", basedOn: "Normal", quickFormat: true,
        run: { font: FONT, size: 22, color: INK },
        paragraph: { spacing: { before: 0, after: 140, line: 300 } } },
      { id: "Lead", name: "Chapeau", basedOn: "Normal", quickFormat: true,
        run: { font: FONT, size: 26, color: INK },
        paragraph: { spacing: { before: 0, after: 160 }, keepNext: true } },
      { id: "Source", name: "Source", basedOn: "Normal", quickFormat: true,
        run: { font: FONT, size: 18, color: GREY },
        paragraph: { spacing: { before: 0, after: 360 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: LINE, space: 8 } } } },
    ],
  },
  numbering: {
    config: [{
      reference: "puces",
      levels: [{ level: 0, format: LevelFormat.BULLET, text: "–", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 440, hanging: 260 } }, run: { color: GREEN, bold: true } } }],
    }],
  },
  sections: [{
    properties: { page: { margin: { top: 1300, bottom: 1300, left: 1440, right: 1440 } } },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(process.argv[2], buf);
  console.log("écrit", process.argv[2], buf.length, "octets");
});
