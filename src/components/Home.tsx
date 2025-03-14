import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import BrewingMethodSelector from './BrewingMethodSelector';
import BrewingMethodDetails from './BrewingMethodDetails';
import { TFunction } from 'i18next';
import { Helmet } from 'react-helmet-async';

const getV60Data = (liquidSize: number, t: TFunction) => {
  const bloomWater = Math.round(liquidSize * 0.12);
  const firstPour = Math.round(liquidSize * 0.48);
  const secondPour = Math.round(liquidSize * 0.4);
  const firstTotal = Math.round(liquidSize * 0.6);

  return {
    title: t('brewingDetails.v60Title'),
    liquidSize,
    groundCoffee: Math.round(liquidSize * 0.06),
    waterForBloom: bloomWater,
    breakdown: {
      before: t('brewingDetails.v60Before'),
      steps: [
        { time: '00:00', action: t('brewingDetails.v60.steps.bloom', { bloomWater }) },
        { time: '00:45', action: t('brewingDetails.v60.steps.firstPour', { firstPour, firstTotal }) },
        { time: '01:15', action: t('brewingDetails.v60.steps.secondPour', { secondPour, total: liquidSize }) },
        { time: '01:45', action: t('brewingDetails.v60.steps.stir') }
      ]
    }
  }
};

const getFrenchPressData = (liquidSize: number, t: TFunction) => ({
  title: t('brewingDetails.frenchPressTitle'),
  liquidSize,
  groundCoffee: Math.round(liquidSize / 16.67),
  breakdown: {
    steps: [
      { time: '00:00', action: t('brewingDetails.frenchPress.steps.combine') },
      { time: '04:00', action: t('brewingDetails.frenchPress.steps.stir') },
      { time: '12:00', action: t('brewingDetails.frenchPress.steps.plunger') }
    ]
  }
});

const Home = () => {
  const { t, i18n } = useTranslation();
  const [selectedMethod, setSelectedMethod] = useState<'v60' | 'frenchPress'>('v60');
  const [liquidSize, setLiquidSize] = useState(500);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleLiquidSizeChange = (newSize: number) => {
    setLiquidSize(newSize);
  };

  const brewingData = selectedMethod === 'v60' 
    ? getV60Data(liquidSize, t) 
    : getFrenchPressData(liquidSize, t);

  return (
    <>
      <Helmet>
        <title>{t('title')} | {t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={t('seo.keywords')} />
        <meta property="og:title" content={`${t('title')} | ${t('seo.title')}`} />
        <meta property="og:description" content={t('seo.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://coffee.juanrey.co" />
        <html lang={i18n.language} />
      </Helmet>
      <div className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-3">
              {t('title')}
            </h1>
            <p className="text-gray-400 text-lg">
              {t('subtitle')}
            </p>
          </div>
        </header>

        <main>
          <BrewingMethodSelector
            selectedMethod={selectedMethod}
            onMethodChange={setSelectedMethod}
          />
          <BrewingMethodDetails
            {...brewingData}
            onLiquidSizeChange={handleLiquidSizeChange}
          />
        </main>
      </div>
    </>
  );
};

export default Home; 