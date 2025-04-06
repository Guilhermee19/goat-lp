'use client';

import { Menu } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import LocaleSwitcher from '../locale-switcher';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: '/',
    src: 'logo.svg',
    alt: 'logo',
    title: 'Shadcnblocks.com',
  },
  menu = [
    { title: 'Soluções', url: '/home' },
    { title: 'Recursos', url: '/home' },
    { title: 'Temas', url: '/home' },
    { title: 'Preços', url: '/home' },
  ],
  auth = {
    login: { text: 'Fazer login', url: '/login' },
    signup: { text: 'Sign up', url: '/signup' },
  },
}: Navbar1Props) => {
  return (
    <>
      <div className="w-full flex justify-between items-centerk">
        <div className="w-full p-4 text-xs lg:text-sm font-normal font-sourceSans3 bg-gradient-to-r from-[#6a6a6a] to-[#181818] flex justify-center items-center text-white gap-2">
          Quem joga para ganhar precisa das melhores ferramentas. Chegou sua vez
          de liderar.
          <Icon name="arrow_right" className="size-4 flex lg:hidden"></Icon>
        </div>
        <div className="min-w-96 hidden lg:flex w-max p-3 text-sm font-semibold font-hankenGrotesk bg-gradient-to-r from-[#2e2e2e] to-[#525252] border-l border-solid border-[#737373] justify-center items-center gap-2 text-white">
          Explorar preços
          <Icon name="arrow_right" className="size-3"></Icon>
        </div>
      </div>

      <section className="py-5 border-b border-[rgba(255,255,255,0.2)]">
        <div className="container mx-auto">
          {/* Desktop Menu */}
          <nav className="hidden max-w-6xl mx-auto justify-between lg:flex">
            <div className="flex items-center gap-6">
              <a href={logo.url} className="flex items-center gap-2">
                <Image width={100} height={50} src={logo.src} alt={logo.alt} />
              </a>
              <div className="flex items-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    {menu.map((item) => renderMenuItem(item))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-transparent hover:bg-transparent hover:text-white"
              >
                <a
                  href={auth.login.url}
                  className="text-white font-sourceSans3"
                >
                  Fazer login
                </a>
              </Button>
              <div className="bg-white flex justify-center font-semibold items-center rounded-full px-4 py-2 text-grayDark">
                Teste grátis por 7 dias
              </div>
              <LocaleSwitcher />
            </div>
          </nav>
          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <a href={logo.url} className="flex items-center gap-2">
                <Image width={100} height={50} src={logo.src} alt={logo.alt} />
              </a>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center gap-2">
                        <Image
                          width={100}
                          height={50}
                          src={logo.src}
                          alt={logo.alt}
                        />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>

                    <div className="flex flex-col gap-3">
                      <Button asChild variant="outline">
                        <a href={auth.login.url}>{auth.login.text}</a>
                      </Button>
                      <Button asChild>
                        <a href={auth.signup.url}>{auth.signup.text}</a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div>{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
