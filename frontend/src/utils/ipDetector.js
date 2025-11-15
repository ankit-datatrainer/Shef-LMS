// IP Address Detection Utility

/**
 * Fetches the user's public IP address
 * Uses multiple fallback services for reliability
 */
export const getPublicIP = async () => {
  const ipServices = [
    'https://api.ipify.org?format=json',
    'https://api.ip.sb/jsonip',
    'https://ipapi.co/json/',
    'https://api.myip.com'
  ];

  for (const service of ipServices) {
    try {
      const response = await fetch(service, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        // Different services return IP in different formats
        const ip = data.ip || data.query || data.IPv4 || null;
        
        if (ip && isValidIP(ip)) {
          return ip;
        }
      }
    } catch (error) {
      console.warn(`Failed to fetch IP from ${service}:`, error.message);
      continue; // Try next service
    }
  }

  // If all services fail, return fallback
  return 'IP Detection Failed';
};

/**
 * Validates if a string is a valid IP address (IPv4 or IPv6)
 */
const isValidIP = (ip) => {
  // IPv4 regex
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  // IPv6 regex (simplified)
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
};

/**
 * Gets detailed IP information including location
 */
export const getIPDetails = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (response.ok) {
      const data = await response.json();
      return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        countryCode: data.country_code,
        timezone: data.timezone,
        isp: data.org,
        latitude: data.latitude,
        longitude: data.longitude
      };
    }
  } catch (error) {
    console.error('Error fetching IP details:', error);
  }
  
  // Fallback to just IP
  const ip = await getPublicIP();
  return {
    ip,
    city: 'Unknown',
    region: 'Unknown',
    country: 'Unknown',
    countryCode: 'XX',
    timezone: 'Unknown',
    isp: 'Unknown'
  };
};

/**
 * Stores IP address in localStorage for quick access
 */
export const cacheIP = (ipData) => {
  try {
    localStorage.setItem('user_ip_data', JSON.stringify({
      ...ipData,
      cachedAt: new Date().toISOString()
    }));
  } catch (error) {
    console.error('Error caching IP:', error);
  }
};

/**
 * Retrieves cached IP data if available and not expired
 */
export const getCachedIP = () => {
  try {
    const cached = localStorage.getItem('user_ip_data');
    if (cached) {
      const data = JSON.parse(cached);
      const cachedTime = new Date(data.cachedAt);
      const now = new Date();
      
      // Cache expires after 24 hours
      const hoursDiff = (now - cachedTime) / (1000 * 60 * 60);
      
      if (hoursDiff < 24) {
        return data;
      }
    }
  } catch (error) {
    console.error('Error retrieving cached IP:', error);
  }
  
  return null;
};

/**
 * Main function to get IP with caching
 */
export const detectUserIP = async () => {
  // Try cache first
  const cached = getCachedIP();
  if (cached) {
    return cached;
  }
  
  // Fetch fresh data
  const ipData = await getIPDetails();
  cacheIP(ipData);
  
  return ipData;
};
