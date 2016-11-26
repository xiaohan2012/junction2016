package junction2016.ufibp.backend.api;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Slf4j
@RestController("/welcome")
public class WelcomeController {

    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(method = RequestMethod.GET)
    public String welcome() {
        return "welcome";
    }
}
