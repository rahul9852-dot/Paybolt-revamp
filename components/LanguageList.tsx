import { ReactTyped } from 'react-typed';
import { TranslationsLang } from '@/data';
import { Button } from './ui/MovingBorders';

const LanguagesList = () => {
  return (
    <Button containerClassName='w-full px-4 '>
    <section className="py-6 px-4">
        <div className="px-2 font-bold flex items-center justify-center gap-x-2 ">
          <span className="text-5xl font-bold relative text-center -translate-x-14">
            <span>Built for </span>
            <ReactTyped
              strings={TranslationsLang}
              typeSpeed={80}
              backSpeed={80}
              loop
              className="tricolor absolute ml-5"
            />
          </span>
        </div>
    </section>
    </Button>
  );
};

export default LanguagesList;
