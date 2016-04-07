var React = require('react')
var DictData = [
  {
    "testName": "Magnesium",
    "dictionaryId": 108
  },
  {
    "testName": "Magnessium",
    "dictionaryId": 108
  },
  {
    "testName": "Phosphorus",
    "dictionaryId": 120
  },
  {
    "testName": "S. Phosphorus",
    "dictionaryId": 120
  },
  {
    "testName": "Potassium",
    "dictionaryId": 124
  },
  {
    "testName": "S. POTASSIUM",
    "dictionaryId": 124
  },
  {
    "testName": "Serum Potassium",
    "dictionaryId": 124
  },
  {
    "testName": "Serum Potassium (K)",
    "dictionaryId": 124
  },
  {
    "testName": "IRON",
    "dictionaryId": 134
  },
  {
    "testName": "S. IRON",
    "dictionaryId": 134
  },
  {
    "testName": "Sex Hormone Binding Globulin (SHBG)",
    "dictionaryId": 135
  },
  {
    "testName": "Triglycerides-Direct",
    "dictionaryId": 154
  },
  {
    "testName": "Triglycerides",
    "dictionaryId": 154
  },
  {
    "testName": "S.Triglycerides",
    "dictionaryId": 154
  },
  {
    "testName": "VLDL Cholesterol",
    "dictionaryId": 161
  },
  {
    "testName": "S. VLDL ",
    "dictionaryId": 161
  },
  {
    "testName": "HbA1c",
    "dictionaryId": 235
  },
  {
    "testName": "Total Cholesterol-Direct",
    "dictionaryId": 269
  },
  {
    "testName": "Total Cholesterol",
    "dictionaryId": 269
  },
  {
    "testName": "S.Cholesterol",
    "dictionaryId": 269
  },
  {
    "testName": "Serum Cholesterol",
    "dictionaryId": 269
  },
  {
    "testName": "Gamma Glutaryl Transpeptidase (GGT)",
    "dictionaryId": 294
  },
  {
    "testName": "GGT ( Gamma Glutamyl Transferase)",
    "dictionaryId": 294
  },
  {
    "testName": "HDL",
    "dictionaryId": 300
  },
  {
    "testName": "HDL Cholesterol-Direct",
    "dictionaryId": 300
  },
  {
    "testName": "TC/HDL Ratio",
    "dictionaryId": 300
  },
  {
    "testName": "LDL/HDL Ratio",
    "dictionaryId": 300
  },
  {
    "testName": "HDL Cholesterol",
    "dictionaryId": 300
  },
  {
    "testName": "Direct HDL Cholestrol",
    "dictionaryId": 300
  },
  {
    "testName": "S. HDL ",
    "dictionaryId": 300
  },
  {
    "testName": "HCT(Hematocrit)",
    "dictionaryId": 301
  },
  {
    "testName": " packed cell volume (PCV) ",
    "dictionaryId": 301
  },
  {
    "testName": "Hemoglobin",
    "dictionaryId": 302
  },
  {
    "testName": "Haemoglobin(Hb)",
    "dictionaryId": 302
  },
  {
    "testName": "HAEMOGLOBIN",
    "dictionaryId": 302
  },
  {
    "testName": "Anti Hepatitis B Core Antigen-Total             ",
    "dictionaryId": 303
  },
  {
    "testName": "Lactate Dehydrogenase(LDH)",
    "dictionaryId": 312
  },
  {
    "testName": "S. LDH",
    "dictionaryId": 312
  },
  {
    "testName": "LDL",
    "dictionaryId": 313
  },
  {
    "testName": "LDL Cholesterol",
    "dictionaryId": 313
  },
  {
    "testName": "S. LDL ",
    "dictionaryId": 313
  },
  {
    "testName": "Lipase",
    "dictionaryId": 314
  },
  {
    "testName": "Platelet Count",
    "dictionaryId": 331
  },
  {
    "testName": "Prolactin",
    "dictionaryId": 335
  },
  {
    "testName": "Intact Parathyroid Hormone",
    "dictionaryId": 338
  },
  {
    "testName": "RBC Count",
    "dictionaryId": 339
  },
  {
    "testName": "RBC's Count mil/cmm",
    "dictionaryId": 339
  },
  {
    "testName": "RBC's",
    "dictionaryId": 339
  },
  {
    "testName": "RBC's Count ",
    "dictionaryId": 339
  },
  {
    "testName": "R.B.C. COUNT",
    "dictionaryId": 339
  },
  {
    "testName": "RBC",
    "dictionaryId": 339
  },
  {
    "testName": "TOTAL Tri Iodothyronine T3",
    "dictionaryId": 349
  },
  {
    "testName": "Tri Iodothyronine T3",
    "dictionaryId": 349
  },
  {
    "testName": "Free Tri Iodothyronine FT3",
    "dictionaryId": 349
  },
  {
    "testName": "T3",
    "dictionaryId": 349
  },
  {
    "testName": "FREE T3",
    "dictionaryId": 349
  },
  {
    "testName": "FT3",
    "dictionaryId": 349
  },
  {
    "testName": "TOTAL TRI IODOTHYRONINE (T3)",
    "dictionaryId": 349
  },
  {
    "testName": "FREE  TRI IODOTHYRONINE (FT3)",
    "dictionaryId": 349
  },
  {
    "testName": "Free triiodothyronine (FT3)",
    "dictionaryId": 349
  },
  {
    "testName": "Triiodothyronine (T3)",
    "dictionaryId": 349
  },
  {
    "testName": "TOTAL Thyroxine T4",
    "dictionaryId": 350
  },
  {
    "testName": "Thyroxine T4",
    "dictionaryId": 350
  },
  {
    "testName": "Free Thyroxine FT4",
    "dictionaryId": 350
  },
  {
    "testName": "T4",
    "dictionaryId": 350
  },
  {
    "testName": "FREE T4",
    "dictionaryId": 350
  },
  {
    "testName": "FT4",
    "dictionaryId": 350
  },
  {
    "testName": "TOTAL THYROXINE (T4)",
    "dictionaryId": 350
  },
  {
    "testName": "FREE THYROXINE (FT4)",
    "dictionaryId": 350
  },
  {
    "testName": "Thyroxine (T4)",
    "dictionaryId": 350
  },
  {
    "testName": "Total Testosterone",
    "dictionaryId": 353
  },
  {
    "testName": "S. Testosterone",
    "dictionaryId": 353
  },
  {
    "testName": "Total Iron Binding Capacity",
    "dictionaryId": 357
  },
  {
    "testName": "% Transferrin Saturation",
    "dictionaryId": 357
  },
  {
    "testName": "Total Iron Binding Capacity (TIBC)",
    "dictionaryId": 357
  },
  {
    "testName": "Thyroid Stimulation Hormone TSH",
    "dictionaryId": 362
  },
  {
    "testName": "Thyroid Stimulating Hormone(TSH)",
    "dictionaryId": 362
  },
  {
    "testName": "Parathyroid Hormone (Intact)",
    "dictionaryId": 362
  },
  {
    "testName": "THYROID STIMULATING HORMONE (TSH)",
    "dictionaryId": 362
  },
  {
    "testName": "TSH",
    "dictionaryId": 362
  },
  {
    "testName": "Uric Acid",
    "dictionaryId": 367
  },
  {
    "testName": "S.Uric Acid",
    "dictionaryId": 367
  },
  {
    "testName": "S. Uric Acid",
    "dictionaryId": 367
  },
  {
    "testName": "Serum Uric Acid",
    "dictionaryId": 367
  },
  {
    "testName": "VITAMIN B12",
    "dictionaryId": 373
  },
  {
    "testName": "Cobalamin (Vitamin B12), Serum",
    "dictionaryId": 373
  },
  {
    "testName": "WBC COUNT",
    "dictionaryId": 375
  },
  {
    "testName": "WBC",
    "dictionaryId": 375
  },
  {
    "testName": "Total WBC count",
    "dictionaryId": 375
  }
]

module.exports=DictData;
