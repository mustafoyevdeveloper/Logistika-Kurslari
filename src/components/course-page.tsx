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
        "Logistika turlari"
      ]
    },
    {
      title: "3-Modul: Xalqaro savdo jarayonlari va hujjatlar",
      items: [
        "Hujjatlar: CMR, Carnet TIR, hisob-faktura, mahsulot sertifikati va boshqalar."
      ]
    },
    {
      title: "Modul 4: Bojxona ishlari",
      items: [
        "Bojxona deklaratsiyasi nima?",
        "Bojxona nazoratining zamonaviy texnologiyalari."
      ]
    },
    {
      title: "Amaliyot darsi:",
      items: [
        "Real yuklar bilan mustaqil ishlash",
        "5+ sayt va guruh orqali yuklar bilan ishlash",
        "Yuklarni tahlil qilish",
        "Sayt va platformalardan foydalanish ko'nikmasi",
        "Barcha ko'nikmalarni mustahkamlash",
        "Yakuniy sinov testi"
      ]
    }
  ];

  const proModules = [
    {
      title: "",
      items: [
        "Xalqaro logistika kursimizga xush kelibsiz!",
        "Bu kasb sizga uyda o'tirib, bemalol pul ishlash imkoniyatini beradi",
        "Ish vaqti o'zingizga bog'liq: xohlasangiz 24/7 ishlashingiz mumkin, xohlasangiz kuniga 2-3 soat"
      ]
    },
    {
      title: "Nima uchun xalqaro logistika?",
      items: [
        "✅ Til bilish shart emas! – Chunki haydovchilar va firmalar o'zbek",
        "✅ Amerika va Afrika davlatlaridan tashqari barcha davlatlar bilan ishlash imkoniyati!",
        "✅ O'zbekistonda 2-3 soat harakat qilib, bemalol 100-200 ming so'm ishlab topish mumkin",
        "✅ Chet el yuklari bilan ishlaganda har bir yopilgan yuk uchun 25$ dan 100-200$ gacha daromad olish mumkin",
        "✅ Ishni 0 dan o'rgatamiz! Barcha jarayonlarda o'zim yordam beraman"
      ]
    },
    {
      title: "Bizning asosiy ishimiz qanday?",
      items: [
        "• Yuk tashuvchi mashinalarga yuk topib berish",
        "• Yuk jo'natuvchi firmalarga yuk tashuvchi mashina topib berish"
      ]
    },
    {
      title: "Kursimiz qanday o'tadi?",
      items: [
        "📅 2 kun davom etadi",
        "📌 1-kun: Nazariy darslar – video, yozma yoki ovozli tushuntirishlar",
        "📌 2-kun: Amaliy mashg'ulot – chat orqali muloqot, kim bilan qanday gaplashish, qanday ishlash va daromad olish sirlarini o'rgatamiz",
        "✅ O'quvchilar daromad qila boshlaganidan keyin ham doimiy ravishda aloqada bo'laman va qo'llab-quvvatlayman!"
      ]
    },
    {
      title: "Murojaat uchun:",
      items: [
         "📞Tel: +998 (97) 400-92-79",
         "📱 Telegam: Yuldoshev Asliddin | Logistica"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-left">Onlayn Kurs narxi</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <PricingCard
            type="basic"
            price="570 000"
            originalPrice="700 000"
            currency="UZS"
            modules={basicModules}
            buttonText="Ko'proq ma'lumot"
          />
          
          <PricingCard
            type="pro"
            price=""
            originalPrice=""
            currency=""
            discount=""
            modules={proModules}
            buttonText="Ko'proq ma'lumot"
          />
        </div>
      </div>
    </div>
  );
};