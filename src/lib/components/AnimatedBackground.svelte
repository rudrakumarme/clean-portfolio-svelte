<script>
    // We'll use a function to update the SVG shapes over time
    let shapes = [];
  
    function randomShape() {
      // This function will create a random shape with random properties
      const type = Math.random() > 0.5 ? 'rect' : 'polygon';
      const size = Math.random() * 50 + 10;
      const position = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      const animationDuration = Math.random() * 10 + 5;
      return { type, size, position, animationDuration };
    }
  
    function populateShapes() {
      // Populate the array with random shapes
      for (let i = 0; i < 50; i++) {
        shapes.push(randomShape());
      }
    }
  
    // Call the populate function on component mount
    populateShapes();
  
    // We can use window.requestAnimationFrame for smoother animations
    function animate() {
      shapes = shapes.map((shape) => ({
        ...shape,
        position: {
          x: (shape.position.x + 1) % window.innerWidth,
          y: (shape.position.y + 1) % window.innerHeight,
        },
      }));
      window.requestAnimationFrame(animate);
    }
  
    // Start the animation
    animate();
  </script>
  
  <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1">
    {#each shapes as { type, size, position, animationDuration }}
      {#if type === 'rect'}
        <rect fill="white" opacity="0.5"
          width={size} height={size}
          x={position.x} y={position.y}
          style={`animation: float ${animationDuration}s linear infinite;`}>
        </rect>
      {:else}
        <polygon fill="white" opacity="0.5"
          points={`${position.x},${position.y} ${position.x + size},${position.y} ${position.x},${position.y + size}`}
          style={`animation: float ${animationDuration}s linear infinite;`}>
        </polygon>
      {/if}
    {/each}
  </svg>
  
  <style>
    @keyframes float {
      to {
        transform: translateY(-20px);
      }
    }
  </style>
  