```php
['GET', '/group/{group}', \App\Controllers\GroupController::class, 'index', 'metrics.twig'],
['GET', '/metric/{id:\d+}', \App\Controllers\MetricController::class, 'index', 'metric.twig'],
```
