import { DropdownMenu, Flex, Text } from '@radix-ui/themes';
import i18next, { changeLanguage } from 'i18next';
import FlagIconEN from '@/assets/icons/flags/FlagIconEN';
import FlagIconPL from '@/assets/icons/flags/FlagIconPL';
import DropdownFlex from '../../ui/DropdownFlex/DropdownFlex';

interface LanguageType {
  language: string;
  name: string;
  flagSvg: JSX.Element;
}

const languagesList: LanguageType[] = [
  {
    language: 'en',
    name: 'English',
    flagSvg: <FlagIconEN />,
  },
  {
    language: 'pl',
    name: 'Polski',
    flagSvg: <FlagIconPL />,
  },
];

const LanguageSwitcher = (): JSX.Element => {
  const currentLanguage = languagesList.find(
    ({ language }) => language === i18next.language,
  );

  const handleLanguageChange = (lng: string): void => void changeLanguage(lng);
  return (
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>
        <DropdownFlex>
          {currentLanguage?.flagSvg}
          <Text>{currentLanguage?.name}</Text>
        </DropdownFlex>
      </DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <Flex direction="column" gap="2">
          {languagesList.map((language) => (
            <DropdownMenu.Item
              key={language.language}
              onClick={() => handleLanguageChange(language.language)}
            >
              <DropdownFlex gap="2">
                {language.flagSvg}
                <Text>{language.name}</Text>
              </DropdownFlex>
            </DropdownMenu.Item>
          ))}
        </Flex>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
  );
};

export default LanguageSwitcher;
