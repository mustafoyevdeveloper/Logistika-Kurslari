import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface PricingCardProps {
  type: "basic" | "pro";
  price: string;
  originalPrice: string;
  currency: string;
  discount?: string;
  modules: {
    title: string;
    items: string[];
  }[];
  buttonText: string;
}

export const PricingCard = ({
  type,
  price,
  originalPrice,
  currency,
  discount,
  modules,
  buttonText,
}: PricingCardProps) => {
  const isBasic = type === "basic";
  const isPro = type === "pro";
  const [isExpanded, setIsExpanded] = useState(false);

  // Split modules into visible (first 2) and hidden (rest)
  const visibleModules = modules.slice(0, 2);
  const hiddenModules = modules.slice(2);

  // Function to split module title into number and name
  const splitModuleTitle = (title: string) => {
    const colonIndex = title.indexOf(':');
    if (colonIndex !== -1) {
      return {
        number: title.substring(0, colonIndex + 1),
        name: title.substring(colonIndex + 1).trim()
      };
    }
    return { number: '', name: title };
  };

  return (
    <Card className={`relative overflow-hidden h-fit rounded-xl ${
      isBasic 
        ? "border-none bg-white shadow-lg" 
        : "border-none shadow-lg"
    }`}>
      {isPro && discount && (
        <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-medium z-10">
          {discount}
        </div>
      )}
      
      {isBasic && (
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
          Eng ko'p sotilgan
        </div>
      )}

      <div className={`mb-6 p-6 rounded-t-xl ${
        isBasic ? "bg-gradient-to-br from-blue-600 to-orange-500 text-white" : "bg-gradient-to-br from-blue-600 to-orange-500 text-white"
      }`}>
        <h3 className={`text-2xl mb-4 text-white ${isPro ? 'font-bold' : ''}`}>
          {isBasic ? "Baza" : "Nima uchun xalqaro logistika?"}
        </h3>
        
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-2xl font-bold transform -translate-y-4 text-white">{currency}</span>
        </div>
        
        <div className="text-lg line-through text-white/70">
          {originalPrice} {currency}
        </div>
      </div>

      <div className="space-y-6 mb-6 px-6">
        {/* Always visible modules (1 and 2) */}
        {visibleModules.map((module, index) => {
          const { number, name } = splitModuleTitle(module.title);
          return (
            <div key={index}>
              <h4 className="font-bold mb-3 text-lg">
                <span className="text-black">{number}</span>
                <span className="text-black"> </span>
                <span className="text-orange-600">
                  {name}
                </span>
              </h4>
              <ul className="space-y-2">
                {module.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm flex items-start gap-2 text-gray-700">
                    <span className="mt-1 flex-shrink-0 text-gray-700">•</span>
                    <span className={`leading-relaxed ${item.includes('+998') ? 'text-yellow-600 font-semibold cursor-pointer hover:text-yellow-700' : ''}`}>
                      {item.includes('+998') ? (
                        <a href={`tel:${item.replace('📞Tel: ', '')}`} className="hover:underline">
                          {item}
                        </a>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* Expandable modules (3, 4, 5, 6, amaliyot) */}
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="space-y-6">
            {hiddenModules.map((module, index) => {
              const { number, name } = splitModuleTitle(module.title);
              return (
                <div key={index + 2}>
                  <h4 className="font-bold mb-3 text-lg">
                    <span className="text-black">{number}</span>
                    <span className="text-black"> </span>
                    <span className="text-orange-600">
                      {name}
                    </span>
                  </h4>
                  <ul className="space-y-2">
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm flex items-start gap-2 text-gray-700">
                        <span className="mt-1 flex-shrink-0 text-gray-700">•</span>
                        <span className={`leading-relaxed ${item.includes('+998') ? 'text-yellow-600 font-semibold cursor-pointer hover:text-yellow-700' : ''}`}>
                          {item.includes('+998') ? (
                            <a href={`tel:${item.replace('📞Tel: ', '')}`} className="hover:underline">
                              {item}
                            </a>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-6 mb-6">
        {!isExpanded ? (
          <Button 
            className="w-full py-3 rounded-lg font-medium active:bg-orange-500 focus:bg-orange-500 bg-orange-500 text-white hover:bg-orange-600 border-none"
            onClick={() => setIsExpanded(true)}
          >
            {buttonText}
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button 
            variant="outline"
            className="w-full py-3 rounded-lg font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 border-gray-300 active:bg-gray-100 focus:bg-gray-100"
            onClick={() => setIsExpanded(false)}
          >
            Yopish ↑
            <ChevronUp className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </Card>
  );
}; 