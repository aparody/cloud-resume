import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://950qct0g80.execute-api.us-east-2.amazonaws.com/prod/updateVisitorCount');
        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.visitor_count);
        } else {
          console.error('Failed to fetch visitor count');
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div>
        <p className='left'></p>
        <p className='right'>Visitor Count: {visitorCount}</p>
    </div>
  );
};

export default VisitorCounter;


