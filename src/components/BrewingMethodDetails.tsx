import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  liquidSize: number;
  groundCoffee: number;
  waterForBloom?: number;
  breakdown: {
    before?: string;
    steps: {
      time: string;
      action: string;
    }[];
  };
  onLiquidSizeChange: (size: number) => void;
}

const BrewingMethodDetails = ({
  title,
  liquidSize,
  groundCoffee,
  waterForBloom,
  breakdown,
  onLiquidSizeChange
}: Props) => {
  const { t } = useTranslation();

  const liquidSizeOptions = Array.from(
    { length: 19 }, 
    (_, i) => 1000 - i * 50
  ).sort((a, b) => b - a);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-gray-400 mb-2">{t('brewingDetails.liquidSize')}</h3>
            <div className="relative inline-block">
              <select
                value={liquidSize}
                onChange={(e) => onLiquidSizeChange(Number(e.target.value))}
                className="appearance-none bg-[#1c1c1c] text-white px-4 py-2 pr-8 rounded text-xl focus:outline-none cursor-pointer [&>option]:bg-[#1c1c1c]"
              >
                {liquidSizeOptions.map((size) => (
                  <option key={size} value={size} className="py-1">
                    {size} {t('brewingDetails.units.ml')}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-400 mb-2">{t('brewingDetails.groundCoffee')}</h3>
            <p className="text-xl">
              {groundCoffee} {t('brewingDetails.units.g')}
            </p>
          </div>
          
          {waterForBloom && (
            <div>
              <h3 className="text-gray-400 mb-2">{t('brewingDetails.waterForBloom')}</h3>
              <p className="text-xl">
                {waterForBloom} {t('brewingDetails.units.ml')}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">{t('brewingDetails.breakdown')}</h3>
          <div className="space-y-4">
            {breakdown.before && (
              <p className="text-gray-400">{breakdown.before}</p>
            )}
            {breakdown.steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-gray-400 font-mono">{step.time}</span>
                <span>{step.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrewingMethodDetails; 