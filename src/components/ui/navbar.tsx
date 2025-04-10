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
import { usePathname } from 'next/navigation';

interface MenuItem {
  title: string;
  url: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  items?: MenuItem[];
  with_border?: boolean;
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
          icon: (
            <Image
              width={28}
              height={28}
              alt="shopping cart"
              src={'/shopping-cart.png'}
              className="min-w-7 size-7 object-cover"
            ></Image>
          ),
          with_border: true,
        },
        {
          title: 'Checkout Global',
          description:
            'Seu negócio pronto para atender clientes em qualquer país',
          url: '/checkout-global',
          icon: (
            <Image
              width={28}
              height={28}
              alt="global"
              src={'/global.png'}
              className="min-w-7 size-7 object-cover"
            ></Image>
          ),
          with_border: true,
        },
        {
          title: '',
          description: (
            <Image
              width={476}
              height={292}
              alt="shop"
              src={'/teste-gratis.png'}
              className="max-w-lg size-full object-contain hidden lg:flex"
            ></Image>
          ),
          url: '',
          icon: '',
        },
        {
          title: 'Landing Pages',
          description:
            'Páginas otimizadas para transformar visitantes em clientes',
          url: '/landing-page',
          icon: (
            <Image
              width={28}
              height={28}
              alt="Monochrome"
              src={'/Monochrome.png'}
              className="min-w-7 size-7 object-cover"
            ></Image>
          ),
        },
        {
          title: 'Loja Virtual',
          description:
            'Venda sem limites com um e-commerce otimizado para faturamento máximo',
          url: '/online-shop',
          icon: (
            <Image
              width={28}
              height={28}
              alt="shop"
              src={'/shop.png'}
              className="min-w-7 size-7 object-cover"
            ></Image>
          ),
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
          icon: (
            <Image
              width={28}
              height={28}
              alt="Grid tablet"
              src={'/Grid-tablet.png'}
              className="min-w-7 size-7 object-cover"
            ></Image>
          ),
          with_border: true,
        },
        {
          title: 'Venda Global',
          description: 'Venda globalmente sem complicação com a GOATCOM.',
          url: '/global-sales',
          icon: (
            <Image
              width={28}
              height={28}
              alt="global"
              src={'/global.png'}
              className="min-w-7 size-7 object-cover"
            ></Image>
          ),
          with_border: true,
        },
        {
          title: 'Marketing',
          description:
            'Mais tráfego, mais conversão, mais vendas. Marketing inteligente para resultados reais.',
          url: '/marketing',
          icon: (
            <Image
              width={28}
              height={28}
              alt="Marketing"
              src={'/Marketing.png'}
              className="min-w-7 size-7 object-cover"
            ></Image>
          ),
          with_border: true,
        },
        {
          title: 'Relatórios',
          description:
            'Venda mais e melhor com relatórios que entregam o que realmente importa.',
          url: '/reports',
          icon: (
            <Image
              width={28}
              height={28}
              alt="Chat"
              src={'/Chat-icon.png'}
              className="min-w-7 size-7 object-cover"
            ></Image>
          ),
        },
        {
          title: 'Apps e Integrações',
          description:
            'A GOATCOM se conecta ao que há de melhor no mercado para você vender sem limites.',
          url: '/apps-and-integrations',
          icon: (
            <Image
              width={28}
              height={28}
              alt="scan barcode"
              src={'/scan-barcode.png'}
              className="min-w-7 size-7 object-cover"
            ></Image>
          ),
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
  const pathname = usePathname();

  return (
    <>
      {pathname === '/' && (
        <div className="w-full flex justify-between items-centerk">
          <div className="w-full p-4 text-base font-normal font-sourceSans3 bg-gradient-to-r from-[#6a6a6a] to-[#181818] flex justify-center items-center text-white gap-2">
            Quem joga para ganhar precisa das melhores ferramentas. Chegou sua
            vez de liderar.
            <Icon name="arrow_right" className="size-4 flex lg:hidden"></Icon>
          </div>
          <div className="min-w-96 hidden lg:flex w-max p-3 text-base font-semibold font-hankenGrotesk bg-gradient-to-r from-[#2e2e2e] to-[#525252] border-l border-solid border-[#737373] justify-center items-center gap-2 text-white">
            Explorar preços
            <Icon name="arrow_right" className="size-3"></Icon>
          </div>
        </div>
      )}

      <section className="py-6 px-3 border-b border-[rgba(255,255,255,0.2)]">
        <div className="w-full mx-auto">
          {/* Desktop Menu */}
          <nav className="hidden max-w-7xl mx-auto justify-between lg:flex">
            <div className="flex items-center gap-6">
              <a href={logo.url} className=" flex items-center gap-2">
                <Image
                  width={108}
                  height={48}
                  src={logo.src}
                  alt={logo.alt}
                  className="size-full"
                />
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
              <div className="flex items-center gap-6">
                <LocaleSwitcher />
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-transparent border-transparent"
                    >
                      <Menu className="!size-8  text-white bg-transparent" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto  flex  flex-col items-center justify-center">
                    <SheetHeader>
                      <SheetTitle>
                        <a title="Logo" href={logo.url}>
                          <Image
                            width={100}
                            height={50}
                            src={logo.src}
                            alt={logo.alt}
                          />
                        </a>
                      </SheetTitle>
                    </SheetHeader>
                    <div className="size-full flex flex-col relative ">
                      <Accordion
                        type="single"
                        collapsible
                        className="flex w-full flex-col gap-4 px-4 pb-4 h-fit"
                      >
                        {menu.map((item, idx) =>
                          renderMobileMenuItem(item, idx),
                        )}
                      </Accordion>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
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
        <NavigationMenuTrigger className="text-label hover:!bg-transparent focus:!bg-transparent hover:!text-white">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent
          className={cn('max-w-7xl mx-auto w-full !grid !grid-cols-2', {
            '!grid-cols-3': item.items.length > 4,
          })}
        >
          {item.items.map((subItem) => (
            <>
              <NavigationMenuLink asChild key={subItem.title} className="w-80">
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            </>
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

const renderMobileMenuItem = (item: MenuItem, idx: number) => {
  if (item.items) {
    return (
      <AccordionItem
        key={idx}
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
      className={cn(
        'lg:max-w-[350px] lg:border-none border-b-[1px]  border-[#7D7D7D4D]  border-solid flex flex-row w-full gap-4 p-3 leading-none no-underline transition-colors outline-none select-none  hover:text-accent-foreground',
        { 'row-span-2': !item.title && !item.icon },
        {
          'lg:border-b-[1px]  lg:border-[#7D7D7D4D]  lg:border-solid !pb-8':
            item.with_border,
        },
      )}
      href={item.url}
    >
      {item.title && item.icon && (
        <>
          <div className="text-white">{item.icon}</div>
          <div>
            <div className="text-sm font-semibold text-white">{item.title}</div>
            {item.description && (
              <p className="text-sm leading-snug text-muted-foreground text-white">
                {item.description}
              </p>
            )}
          </div>
        </>
      )}

      {!item.title && !item.icon && item.description && (
        <figure> {item.description} </figure>
      )}
    </a>
  );
};

export { Navbar };
