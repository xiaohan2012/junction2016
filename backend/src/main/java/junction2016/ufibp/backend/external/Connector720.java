package junction2016.ufibp.backend.external;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Slf4j
@Service
public class Connector720 {


    private String serverUri = "https://hackathon.720.fi/nodes/ccecc389-73e7-493b-b6bb-1570ad93fd75/measurements";

    private String login = "junction_hackathon@720.fi";
    private String pass = "i<3python";


    private RestTemplate restTemplate = new BasicAuthRestTemplate(login, pass);

    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");


    public Map getTemp() {

        TemperatureRequest720 req = new TemperatureRequest720();
        req.setAggregate("5m");
        req.setFrom(LocalDateTime.now().minusHours(1).format(formatter));
        req.setUntil(LocalDateTime.now().format(formatter));

        String reqUrl = serverUri+"?aggregate="+req.getAggregate()+"&from="+req.getFrom()+"&until="+req.getUntil();

        Map response = restTemplate.getForObject(reqUrl, Map.class, req);


        List data = ((List)((Map)response.get("data")).get("measurements"));
        //Double temp = (Double)((Map)((Map)((Map)data.get(data.size()-1)).get("sensors")).get("temperature_celsius")).get("value_avg");
        Map sensors = (Map)((Map)data.get(data.size()-1)).get("sensors");

        return sensors;
    }



}
