import { useTranslation } from 'react-i18next';

type BrewingMethod = 'v60' | 'frenchPress';

interface Props {
  selectedMethod: BrewingMethod;
  onMethodChange: (method: BrewingMethod) => void;
}

const BrewingMethodSelector = ({ selectedMethod, onMethodChange }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-4 justify-center mb-8">
      <button
        onClick={() => onMethodChange('v60')}
        className={`px-6 py-3 rounded-lg transition-colors ${
          selectedMethod === 'v60'
            ? 'bg-white text-[#1c1c1c]'
            : 'text-white/60 hover:text-white'
        }`}
      >
        {t('brewingMethods.v60')}
      </button>
      <button
        onClick={() => onMethodChange('frenchPress')}
        className={`px-6 py-3 rounded-lg transition-colors ${
          selectedMethod === 'frenchPress'
            ? 'bg-white text-[#1c1c1c]'
            : 'text-white/60 hover:text-white'
        }`}
      >
        {t('brewingMethods.frenchPress')}
      </button>
    </div>
  );
};

export default BrewingMethodSelector; 