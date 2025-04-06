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
import { cn } from '@/lib/utils';

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
    {
      title: 'Soluções',
      url: '/home',
      items: [
        {
          title: 'Checkout Nacional',
          description:
            'Venda sem limites no Brasil com um checkout otimizado para conversão',
          url: '/checkout-national',
          icon: <Icon name="cart_shopping" className="size-6"></Icon>,
        },
        {
          title: 'Checkout Global',
          description:
            'Seu negócio pronto para atender clientes em qualquer país',
          url: '/checkout-global',
          icon: <Icon name="cart_shopping" className="size-6"></Icon>,
        },
        {
          title: 'Landing Pages',
          description:
            'Páginas otimizadas para transformar visitantes em clientes',
          url: '/landing-page',
          icon: <Icon name="cart_shopping" className="size-6"></Icon>,
        },
        {
          title: 'Loja Virtual',
          description:
            'Venda sem limites com um e-commerce otimizado para faturamento máximo',
          url: '/online-shop',
          icon: <Icon name="cart_shopping" className="size-6"></Icon>,
        },
      ],
    },
    {
      title: 'Recursos',
      url: '/home',
      items: [
        {
          title: 'Temas',
          description:
            'Venda qualquer coisa online com nossos temas personalizáveis.',
          url: '/themes',
          icon: <Icon name="cart_shopping" className="size-6"></Icon>,
        },
        {
          title: 'Venda Global',
          description: 'Venda globalmente sem complicação com a GOATCOM.',
          url: '/global-sales',
          icon: <Icon name="cart_shopping" className="size-6"></Icon>,
        },
        {
          title: 'Marketing',
          description:
            'Mais tráfego, mais conversão, mais vendas. Marketing inteligente para resultados reais.',
          url: '/marketing',
          icon: <Icon name="cart_shopping" className="size-6"></Icon>,
        },
        {
          title: 'Relatórios',
          description:
            'Venda mais e melhor com relatórios que entregam o que realmente importa.',
          url: '/reports',
          icon: <Icon name="cart_shopping" className="size-6"></Icon>,
        },
        {
          title: 'Apps e Integrações',
          description:
            'A GOATCOM se conecta ao que há de melhor no mercado para você vender sem limites.',
          url: '/apps-and-integrations',
          icon: <Icon name="cart_shopping" className="size-6"></Icon>,
        },
      ],
    },
    { title: 'Temas', url: '/themes' },
    { title: 'Preços', url: '/plans' },
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
              <a href={logo.url} className=" flex items-center gap-2">
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
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-transparent border-transparent"
                  >
                    <Menu className="!size-6 text-white bg-transparent" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto flex flex-col items-center justify-center">
                  <SheetHeader>
                    <SheetTitle>
                      <a
                        href={logo.url}
                        className="w-full flex justify-start items-center gap-2"
                      >
                        <Image
                          width={100}
                          height={50}
                          src={logo.src}
                          alt={logo.alt}
                        />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="w-full h-full flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>

                    <div className="flex flex-col gap-3 mt-auto">
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
        <NavigationMenuTrigger className="text-label hover:!bg-transparent hover:!text-white">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent
          className={cn('!w-max !grid !grid-cols-2 md:!w-max-content', {
            '!grid-cols-3': item.items.length > 4,
          })}
        >
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
      <AccordionItem
        key={item.title}
        value={item.title}
        className="border-b-0 text-white"
      >
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline text-white">
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
    <a
      key={item.title}
      href={item.url}
      className="text-md font-semibold text-white"
    >
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="max-w-[350px] flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-[rgba(255,255,255,0.3)] hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-white">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold text-white">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground text-white">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
