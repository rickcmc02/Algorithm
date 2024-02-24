SELECT p.email AS Email 
from Person p GROUP BY email
HAVING COUNT(*) > 1;