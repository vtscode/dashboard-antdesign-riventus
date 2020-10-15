export default {
  items: [
    { name: 'Home', url: '/home', icon: 'icon-home' },
    { name: 'Dashboard', url: '/dashboard', icon: 'icon-speedometer' },
    {
      name: 'Beranda',
      icon: 'icon-service',
      url: '/services',
      children: [
        { name: 'Semua service', url: '/services', icon: 'icon-layers' },
      ]
    },
  ]
}