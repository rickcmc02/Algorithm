SELECT curr_weather.id AS id FROM Weather curr_weather
JOIN Weather prev_weather ON curr_weather.recordDate = DATE_ADD(prev_weather.recordDate, INTERVAL 1 DAY)
WHERE curr_weather.temperature > prev_weather.temperature