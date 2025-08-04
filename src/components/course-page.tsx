import { PricingCard } from "@/components/ui/pricing-card";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export const CoursePage = () => {
  const basicModules = [
    {
      title: "1-Modul: Kirish",
      items: [
        "Xalqaro logistika sohasiga kirish",
        "Yetkazib berish zanjiri elementlari",
        "Logistik jarayonlarning umumiy ko'rinishi"
      ]
    },
    {
      title: "2-Modul: Transport vositalari va turlari",
      items: [
        "Dengiz, havo, avtomobil va temir yo'l transporti",
        "Transport xizmati tanlash bo'yicha asosiy qoidalar",
        "Logistika turlari",
        "EURO standarti qoidalari"
      ]
    },
    {
      title: "3-Modul: Xalqaro savdo jarayonlari va hujjatlar",
      items: [
        "Incoterms 2020: savdo shartlari va ularning qoʻllanilishi",
        "Import-eksport operatsiyalari",
        "Hujjatlar: CMR, Carnet TIR, hisob-faktura, mahsulot sertifikati va boshqalar."
      ]
    },
    {
      title: "Modul 4: Bojxona ishlari",
      items: [
        "Bojxona deklaratsiyasi nima?",
        "Import va eksport jarayonlari uchun kerakli hujjatlar",
        "Bojxona tartib-qoidalari va bojxona deklaratsiyasi.",
        "Tarif va notarif tartiblar (Yozilmagan qoidalar)",
        "Bojxona nazoratining zamonaviy texnologiyalari."
      ]
    },
    {
      title: "Amaliyot darsi:",
      items: [
        "Oraliq test",
        "Real yuklar bilan mustaqil ishlash",
        "Yuklarni tahlil qilish",
        "Sayt va platformalardan foydalanish ko'nikmasi",
        "Bojhona omboriga mentor bilan tashrif",
        "Barcha ko'nikmalarni mustahkamlash",
        "Yakuniy sinov testi"
      ]
    }
  ];

  const proModules = [
    {
      title: "1-Modul: Kirish",
      items: [
        "Xalqaro logistika sohasiga kirish",
        "Xalqaro logistika sohasidagi terminlar",
        "Yetkazib berish zanjiri turlari va ulardagi boshqaruv",
        "Logistikada zamonaviy tendensiyalar va texnologiyalar"
      ]
    },
    {
      title: "2-Modul: Transport va tashish turlari",
      items: [
        "Dengiz, havo, avtomobil va temir yo'l transporti",
        "Multimodal tashish: rejalashtirish va boshqaruv",
        "Transport xarajatlarini optimallashtirish",
        "Logistikada zamonaviy tendensiyalar va texnologiyalar",
        "Yuklarni yuklash va maxsus moslamalar bilan maxkamlash"
      ]
    },
    {
      title: "3-Modul: Xalqaro savdo jarayonlari va hujjatlar",
      items: [
        "Incoterms 2020: savdo shartlari va ularning qo'llanilishi",
        "Import-eksport operatsiyalari",
        "Hujjatlar: CMR, Carnet TIR, hisob-faktura, mahsulot sertifikati va boshqalar."
      ]
    },
    {
      title: "Modul 4: Bojxona ishlari",
      items: [
        "Bojxona tartib-qoidalari va bojxona deklaratsiyasi.",
        "Tarif va notarif tartiblar (Yozilmagan qoidalar)",
        "Bojxona nazoratining zamonaviy texnologiyalari.",
        "Xavfli yuklarning 9 ta sinfi"
      ]
    },
    {
      title: "Modul 5: Logistikada risklarni boshqarish",
      items: [
        "Favqulodda vaziyatlarni boshqarish",
        "Xavflarni aniqlash va baholash"
      ]
    },
    {
      title: "Modul 6: Logistika boshqaruvi va optimizatsiya",
      items: [
        "Sotuv ko'nikmalarini oshirish",
        "Omborxona operatsiyalari va avtomatlashtirish.",
        "Logistikada KPI va samaradorlikni oshirish."
      ]
    },
    {
      title: "Amaliyot darsi:",
      items: [
        "Oraliq test",
        "Real yuklar bilan mentor bilan ishlash",
        "Yuklarni tahlil qilish",
        "Sayt va platformalardan foydalanish",
        "5+ yuk olish",
        "Bojhona omboriga mentor bilan tashrif",
        "Ishlab chiqarish jarayonlarida qatnashish",
        "Ishga joylashishga amliy yordam",
        "Barcha ko'nikmalarni mustahkamlash",
        "Yakuniy sinov testi"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-left">Kurs narxi</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <PricingCard
            type="basic"
            price="2 000 000"
            originalPrice="3 200 000"
            currency="UZS"
            modules={basicModules}
            buttonText="Ko'proq ma'lumot ↓"
          />
          
          <PricingCard
            type="pro"
            price="4 500 000"
            originalPrice="6 000 000"
            currency="UZS"
            discount="-25%"
            modules={proModules}
            buttonText="Ko'proq ma'lumot ↓"
          />
        </div>
      </div>
    </div>
  );
};