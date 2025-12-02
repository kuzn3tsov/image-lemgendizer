export const TEMPLATE_CATEGORIES = [
    { id: 'all', name: 'All Templates', icon: 'fas fa-th' },
    { id: 'web', name: 'Web', icon: 'fas fa-globe' },
    { id: 'logo', name: 'Logo', icon: 'fas fa-copyright' },
    { id: 'instagram', name: 'Instagram', icon: 'fab fa-instagram' },
    { id: 'facebook', name: 'Facebook', icon: 'fab fa-facebook' },
    { id: 'twitter', name: 'Twitter/X', icon: 'fab fa-twitter' },
    { id: 'linkedin', name: 'LinkedIn', icon: 'fab fa-linkedin' },
    { id: 'youtube', name: 'YouTube', icon: 'fab fa-youtube' },
    { id: 'pinterest', name: 'Pinterest', icon: 'fab fa-pinterest' },
    { id: 'tiktok', name: 'TikTok', icon: 'fab fa-tiktok' }
]

export const SOCIAL_MEDIA_TEMPLATES = [
    // Web Images
    { id: 'web-hero', name: 'Hero Banner Image', width: 1920, height: 1080, platform: 'Web', category: 'web', icon: 'fas fa-desktop' },
    { id: 'web-blog', name: 'Blog Featured Image', width: 1200, height: 630, platform: 'Web', category: 'web', icon: 'fas fa-blog' },
    { id: 'web-content', name: 'Content Image', width: 1200, height: 'auto', platform: 'Web', category: 'web', icon: 'fas fa-image' },
    { id: 'web-thumb', name: 'Thumbnail', width: 250, height: 250, platform: 'Web', category: 'web', icon: 'fas fa-square' },

    // Logo Images
    { id: 'logo-rect', name: 'Logo Rectangular', width: 300, height: 150, platform: 'Logo', category: 'logo', icon: 'fas fa-copyright' },
    { id: 'logo-square', name: 'Logo Square', width: 500, height: 500, platform: 'Logo', category: 'logo', icon: 'fas fa-square' },

    // Instagram
    { id: 'ig-profile', name: 'Instagram Profile', width: 320, height: 320, platform: 'Instagram', category: 'instagram', icon: 'fab fa-instagram' },
    { id: 'ig-square', name: 'Instagram Square Post', width: 1080, height: 1080, platform: 'Instagram', category: 'instagram', icon: 'fas fa-square' },
    { id: 'ig-portrait', name: 'Instagram Portrait Post', width: 1080, height: 1350, platform: 'Instagram', category: 'instagram', icon: 'fas fa-portrait' },
    { id: 'ig-landscape', name: 'Instagram Landscape Post', width: 1080, height: 566, platform: 'Instagram', category: 'instagram', icon: 'fas fa-landscape' },
    { id: 'ig-stories', name: 'Instagram Stories', width: 1080, height: 1920, platform: 'Instagram', category: 'instagram', icon: 'fas fa-film' },

    // Facebook
    { id: 'fb-profile', name: 'Facebook Profile', width: 180, height: 180, platform: 'Facebook', category: 'facebook', icon: 'fab fa-facebook' },
    { id: 'fb-cover', name: 'Facebook Cover Banner', width: 851, height: 315, platform: 'Facebook', category: 'facebook', icon: 'fas fa-banner' },
    { id: 'fb-shared', name: 'Facebook Shared Image', width: 1200, height: 630, platform: 'Facebook', category: 'facebook', icon: 'fas fa-share-alt' },
    { id: 'fb-square', name: 'Facebook Square Post', width: 1200, height: 1200, platform: 'Facebook', category: 'facebook', icon: 'fas fa-square' },
    { id: 'fb-stories', name: 'Facebook Stories', width: 1080, height: 1920, platform: 'Facebook', category: 'facebook', icon: 'fas fa-scroll' },

    // Twitter/X
    { id: 'tw-profile', name: 'X Profile', width: 400, height: 400, platform: 'Twitter/X', category: 'twitter', icon: 'fab fa-twitter' },
    { id: 'tw-header', name: 'X Header Banner', width: 1500, height: 500, platform: 'Twitter/X', category: 'twitter', icon: 'fas fa-banner' },
    { id: 'tw-landscape', name: 'X Landscape Post', width: 1600, height: 900, platform: 'Twitter/X', category: 'twitter', icon: 'fas fa-landscape' },
    { id: 'tw-square', name: 'X Square Post', width: 1080, height: 1080, platform: 'Twitter/X', category: 'twitter', icon: 'fas fa-square' },
    { id: 'tw-portrait', name: 'X Portrait Post', width: 1080, height: 1350, platform: 'Twitter/X', category: 'twitter', icon: 'fas fa-portrait' },

    // LinkedIn
    { id: 'li-profile', name: 'LinkedIn Profile', width: 400, height: 400, platform: 'LinkedIn', category: 'linkedin', icon: 'fab fa-linkedin' },
    { id: 'li-cover', name: 'LinkedIn Personal Cover', width: 1584, height: 396, platform: 'LinkedIn', category: 'linkedin', icon: 'fas fa-user-cover' },
    { id: 'li-landscape', name: 'LinkedIn Landscape Post', width: 1200, height: 627, platform: 'LinkedIn', category: 'linkedin', icon: 'fas fa-landscape' },
    { id: 'li-square', name: 'LinkedIn Square Post', width: 1200, height: 1200, platform: 'LinkedIn', category: 'linkedin', icon: 'fas fa-square' },
    { id: 'li-portrait', name: 'LinkedIn Portrai Post', width: 720, height: 900, platform: 'LinkedIn', category: 'linkedin', icon: 'fas fa-portrait' },

    // YouTube
    { id: 'yt-channel', name: 'YouTube Channel Icon', width: 800, height: 800, platform: 'YouTube', category: 'youtube', icon: 'fab fa-youtube' },
    { id: 'yt-banner', name: 'YouTube Banner', width: 2048, height: 1152, platform: 'YouTube', category: 'youtube', icon: 'fas fa-banner' },
    { id: 'yt-thumb', name: 'YouTube Thumbnail', width: 1280, height: 720, platform: 'YouTube', category: 'youtube', icon: 'fas fa-video' },

    // Pinterest
    { id: 'pin-profile', name: 'Pinterest Profile', width: 165, height: 165, platform: 'Pinterest', category: 'pinterest', icon: 'fab fa-pinterest' },
    { id: 'pin-standard', name: 'Pinterest Standard Pin', width: 1000, height: 1500, platform: 'Pinterest', category: 'pinterest', icon: 'fas fa-thumbtack' },
    { id: 'pin-square', name: 'Pinterest Square Pin', width: 1000, height: 1000, platform: 'Pinterest', category: 'pinterest', icon: 'fas fa-square' },
    { id: 'pin-story', name: 'Pinterest Story Pin', width: 1080, height: 1920, platform: 'Pinterest', category: 'pinterest', icon: 'fas fa-scroll' },

    // TikTok
    { id: 'tt-profile', name: 'TikTok Profile', width: 200, height: 200, platform: 'TikTok', category: 'tiktok', icon: 'fab fa-tiktok' },
    { id: 'tt-video', name: 'TikTok Video Cover', width: 1080, height: 1920, platform: 'TikTok', category: 'tiktok', icon: 'fas fa-video' }
]

// Helper function to get templates by category
export const getTemplatesByCategory = (categoryId) => {
    return SOCIAL_MEDIA_TEMPLATES.filter(template =>
        categoryId === 'all' || template.category === categoryId
    )
}

// Helper function to get category by ID
export const getCategoryById = (categoryId) => {
    return TEMPLATE_CATEGORIES.find(cat => cat.id === categoryId)
}

// Get all categories except 'all'
export const getTemplateCategories = () => {
    return TEMPLATE_CATEGORIES.filter(cat => cat.id !== 'all')
}