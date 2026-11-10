export const categories = [
  { id: 'skincare', title: 'العناية بالبشرة', blurb: 'واقي الشمس والمرطب والسيروم، وروتين بسيط يكفي أغلب الناس.' },
  { id: 'hair-removal', title: 'إزالة الشعر', blurb: 'أجهزة الليزر المنزلي IPL: لمن تصلح، وكيف تختار، وأخطاء تتجنبها.' },
  { id: 'grooming', title: 'العناية الرجالية', blurb: 'ماكينات الحلاقة والتشذيب، والفرق الحقيقي بين الطرازات.' },
  { id: 'oral-care', title: 'العناية بالفم والأسنان', blurb: 'الفرش الكهربائية والخيط المائي، ومتى تحتاج كل واحد.' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export const guides: { href: string; title: string; blurb: string; category: CategoryId }[] = [
  { href: '/guides/basic-skincare-routine/', title: 'روتين العناية بالبشرة الأساسي في 3 خطوات', blurb: 'منظف ومرطب وواقي شمس: ماذا تشتري لكل خطوة، وبأي ترتيب.', category: 'skincare' },
  { href: '/guides/how-to-choose-sunscreen/', title: 'كيف تختار واقي الشمس في الأجواء الحارة', blurb: 'SPF وواسع الطيف ومقاومة الماء، والفرق بين المعدني والكيميائي.', category: 'skincare' },
  { href: '/guides/how-to-choose-moisturizer/', title: 'كيف تختار المرطب المناسب لنوع بشرتك', blurb: 'المكونات التي تبحث عنها، والقوام المناسب للبشرة الجافة والدهنية والحساسة.', category: 'skincare' },
  { href: '/guides/vitamin-c-serum-guide/', title: 'كيف تختار سيروم فيتامين C', blurb: 'النوع والتركيز المناسب والعبوة، وكيف تتجنب منتجاً تأكسد.', category: 'skincare' },
  { href: '/guides/home-laser-hair-removal/', title: 'كيف تختار جهاز ليزر منزلي (IPL) في السعودية', blurb: 'لمن يصلح ولمن لا يصلح، وما الفرق الحقيقي بين الأجهزة، وكيف تتجنب النسخ المقلدة.', category: 'hair-removal' },
  { href: '/guides/philips-lumea-8000-vs-9000/', title: 'Philips Lumea 8000 أم 9000؟', blurb: 'الفرق الحقيقي بين السلسلتين، ومتى لا تحتاج الطراز الأغلى.', category: 'hair-removal' },
  { href: '/guides/home-laser-mistakes/', title: '7 أخطاء شائعة تفسد نتيجة الليزر المنزلي', blurb: 'لماذا يقول البعض "ما نفع"، وكيف تتجنب ذلك.', category: 'hair-removal' },
  { href: '/guides/philips-oneblade-which-model/', title: 'أي جهاز Philips OneBlade يناسبك؟', blurb: 'للوجه فقط، للوجه والجسم، أو للمناطق الحساسة، وتكلفة الشفرات البديلة.', category: 'grooming' },
  { href: '/guides/electric-toothbrush-water-flosser/', title: 'فرشاة أسنان كهربائية أم خيط مائي؟', blurb: 'الفرق بين Vitality و Pro 3 و iO، ومتى تحتاج خيطاً مائياً.', category: 'oral-care' },
];

export function countLabel(n: number): string {
  if (n === 1) return 'دليل واحد';
  if (n === 2) return 'دليلان';
  if (n >= 3 && n <= 10) return `${n} أدلة`;
  return `${n} دليلاً`;
}
