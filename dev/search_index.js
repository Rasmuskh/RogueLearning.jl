var documenterSearchIndex = {"docs":
[{"location":"functionindex/#Index","page":"functionindex","title":"Index","text":"","category":"section"},{"location":"functionindex/","page":"functionindex","title":"functionindex","text":"Modules = [Bender]","category":"page"},{"location":"#Bender.jl","page":"Home","title":"Bender.jl","text":"","category":"section"},{"location":"#Layers","page":"Home","title":"Layers","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"GenDense","category":"page"},{"location":"#Bender.GenDense","page":"Home","title":"Bender.GenDense","text":"Generalized version of Flux's Dense layer. \n\nGenDense(in=>out, σ=identity; \n         ω = identity, ψ = *, init = glorot_uniform, \n         bias=true, γ=Flux.Zeros()\n\nCan also be initialized with an additional set of trainable weights \n\nGenDense(in=>out, in_asym=>out_asym, σ = identity; \n         ω = identity, ψ = *, init = glorot_uniform, \n         bias=true, bias_asym=true, γ=Flux.Zeros())\n\nTo implement Feedback alignment you need to specify the similarity function ψ=matmul_asym_∂x.\n\njulia> using Flux, Bender\njulia> GenDense(20=>10, 10=>20, relu; ψ=matmul_asym_∂x) \nGenDense(size(weight)=(10, 20), size(weight_asym)=(20, 10), σ=relu, ψ=matmul_asym_∂x)\n\nTo implement a layer with binary {-1,1} weights and neurons, which uses a deterministic  straight-through estimator in the backwards pass you need to specify an activation function for both the weights and neurons.\n\njulia> using, Bender\njulia> GenDense(20=>10, sign_STE; ω=sign_STE)\nGenDense(size(weight)=(10, 20), σ=sign_STE, ω=sign_STE)\n\n\n\n\n\n","category":"type"},{"location":"","page":"Home","title":"Home","text":"GenConv","category":"page"},{"location":"#Bender.GenConv","page":"Home","title":"Bender.GenConv","text":"Generalized version of Flux's conv layer\n\n\n\n\n\n","category":"type"},{"location":"#Similarity/correlation-functions","page":"Home","title":"Similarity/correlation functions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"matmul","category":"page"},{"location":"#Bender.matmul","page":"Home","title":"Bender.matmul","text":"Regular matrix multiplication.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"matmul_asym_∂x","category":"page"},{"location":"#Bender.matmul_asym_∂x","page":"Home","title":"Bender.matmul_asym_∂x","text":"Compute matrix multiplication, but takes an additional matrix B as input.  B has same dims as Wᵀ, and is used in the backwards pass.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"matmul_blocked_∂x","category":"page"},{"location":"#Bender.matmul_blocked_∂x","page":"Home","title":"Bender.matmul_blocked_∂x","text":"Matrix multiplication with custom rrule\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"radialSim","category":"page"},{"location":"#Bender.radialSim","page":"Home","title":"Bender.radialSim","text":"Compute negative squared euclidean distance D between the rows of matrix W and the columns of matrix X. Denoting the rows of W by index i and the columns of X by index j the elements of the output matrix is given by: Dᵢⱼ = -||Wᵢ﹕ - X﹕ⱼ||² = 2Wᵢ﹕X﹕,j - ||Wᵢ﹕||^2 - ||X﹕ⱼ||².\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"radialSim_asym","category":"page"},{"location":"#Bender.radialSim_asym","page":"Home","title":"Bender.radialSim_asym","text":"In the forward pass this function behaves just like radialSim, but in the backwards pass weight symmetry is broken by using matrix B rather than Wᵀ. See docstring for radialSim for more details.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"conv_asym_∂x","category":"page"},{"location":"#Bender.conv_asym_∂x","page":"Home","title":"Bender.conv_asym_∂x","text":"computes the convolution of image x with kernel w when called, but uses a different set of weights w_asym to compute the pullback wrt x. This is typically uses in feedback alignment experiments.\n\n\n\n\n\n","category":"function"},{"location":"#Loss-functions","page":"Home","title":"Loss functions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"direct_feedback_loss","category":"page"},{"location":"#Bender.direct_feedback_loss","page":"Home","title":"Bender.direct_feedback_loss","text":"Error function which takes a vector of the hidden and output neurons states as well as a vector of feedback matrices as arguments\n\n\n\n\n\n","category":"function"},{"location":"#Activation-functions","page":"Home","title":"Activation functions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"sign_STE","category":"page"},{"location":"#Bender.sign_STE","page":"Home","title":"Bender.sign_STE","text":"Deterministic straight-through estimator for the sign function. References: https://arxiv.org/abs/1308.3432, https://arxiv.org/abs/1511.00363\n\n\n\n\n\n","category":"function"}]
}
