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
        "Yuklarni tahlil qilish",
        "Sayt va platformalardan foydalanish ko'nikmasi",
        "Barcha ko'nikmalarni mustahkamlash",
        "Yakuniy sinov testi"
      ]
    }
  ];



  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-left">Kurs narxi</h1>
        
        <div className="flex justify-center">
          <div className="max-w-md">
            <PricingCard
              type="basic"
              price="570 000"
              originalPrice="700 000"
              currency="UZS"
              modules={basicModules}
              buttonText="Ko'proq ma'lumot ↓"
            />
          </div>
        </div>
      </div>
    </div>
  );
};