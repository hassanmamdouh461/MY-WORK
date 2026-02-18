# مولّد الخط الحركي (Kinetic Typography Generator)

أداة ويب لعرض النصوص بتأثيرات بصرية متحركة ومتنوعة. مبنية باستخدام [p5.js](https://p5js.org/).

## المميزات

- أكثر من 13 نمط تحريك مختلف (Arcer، Bend، Box، BugEyes، Halo، RiseSun، Shutters، SlotMachine، Snap، Split، Starburst، Twist، وغيرها)
- تخصيص كامل للنص والألوان وسرعة الحركة واختيار الخط
- مجموعة خطوط متنوعة مدمجة
- يعمل على الكمبيوتر والموبايل
- كل التعديلات تتم من الكود مباشرة

## طريقة التشغيل

1. افتح المجلد في VS Code أو Terminal.
2. شغّل سيرفر محلي:
   ```bash
   python -m http.server 8000
   ```
3. افتح `http://localhost:8000` في المتصفح.

## طريقة التخصيص

كل الإعدادات موجودة في ملف واحد — `js/config.js`:

```javascript
// النص المعروض (استخدم \n للسطر الجديد)
var starterText = "نصك\nهنا";

// الألوان (كود Hex)
var backgroundColorHex = "#000000"; // لون الخلفية
var foregroundColorHex = "#ffffff"; // لون النص

// سرعة الحركة (30 افتراضي، كلما زاد كلما زادت السرعة)
var animationSpeed = 30;

// اختيار الخط (رقم من 0 إلى 6)
// 0: TT Bluescreens  1: TT Travels  2: Inter
// 3: Agrandir        4: ApocLC      5: BaseNeueTrial  6: Cairo
var fontIndex = 0;
```

## هيكل المشروع

```
├── index.html          → الصفحة الرئيسية
├── style.css           → التنسيق
├── js/
│   ├── config.js       → ⚙️ إعداداتك (عدّل هنا)
│   ├── sketch_flash.js → محرك الحركة الرئيسي
│   ├── animators.js    → الكلاسات الأساسية للحركة
│   ├── update.js       → منطق التحديث
│   ├── textures.js     → مساعدات الخامات
│   └── 0_*.js          → أنماط الحركة المختلفة
└── resources/          → الخطوط
```

## الرخصة

يمكنك استخدام هذا المشروع وتعديله وتوزيعه بحرية.
